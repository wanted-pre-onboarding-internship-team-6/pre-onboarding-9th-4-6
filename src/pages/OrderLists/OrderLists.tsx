import { FormEvent, useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import { fetchOrderLists } from '@/api';
import { DataProps } from '@/types';
import {
  calcPageCount,
  createPageNumbers,
  findTransactionsOnDate,
  sliceItemsForPage,
  sortDescDates,
  sortDescId,
} from '@/utils';

import * as S from './styles';

const OrderLists = () => {
  const { isLoading, error, data } = useQuery('orderLists', fetchOrderLists);
  const [sortedItems, setSortedItems] = useState<DataProps[]>([]);
  const [pages, setPages] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const calcSortedId = (items: DataProps[]) => {
    setSortedItems(sortDescId(items));
    setPages(0);
  };

  const calcSortedDates = (items: DataProps[]) => {
    setSortedItems(sortDescDates(items));
    setPages(0);
  };

  const moveToPage = (x: number) => {
    setPages(x);
    setSearchParams({ page: x.toString() });
  };

  const emptySortedItems = () => {
    setSortedItems([]);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCustomerName(e.target.value);
  };

  const handleCustomer = (e: FormEvent) => {
    e.preventDefault();
    setCustomerName('');
  };

  const filteredDatas = findTransactionsOnDate(data);
  const perpageItems = 50;
  const allPages = calcPageCount(filteredDatas, perpageItems);
  const paginationPages = createPageNumbers(allPages);
  const displayDatas = sliceItemsForPage(
    sortedItems,
    filteredDatas,
    pages,
    perpageItems,
  );

  useEffect(() => {
    setPages(parseInt(searchParams.get('page') || '0'));
  }, [searchParams]);

  if (isLoading) return <S.LoadingText>Loading...</S.LoadingText>;
  if (error) return <S.ErrorText>Error!</S.ErrorText>;

  return (
    <S.Container>
      <S.Wrapper>
        <S.Section>
          <S.SearchText>
            검색된 데이터 - {filteredDatas.length || 0}건
          </S.SearchText>
          <S.Header>
            <S.Select>
              <S.Option value="">주문상태</S.Option>
              <S.Option value="진행">진행</S.Option>
              <S.Option value="완료">완료</S.Option>
            </S.Select>
            <S.Form onSubmit={handleCustomer}>
              <S.Label>고객이름</S.Label>
              <S.Input type="text" value={customerName} onChange={onChange} />
              <S.Button type="submit" hidden />
            </S.Form>
          </S.Header>
          <S.Box>
            <S.Button onClick={() => calcSortedId(filteredDatas)}>
              상품번호
            </S.Button>
            <S.Button onClick={() => calcSortedDates(filteredDatas)}>
              거래일&거래시간
            </S.Button>
            <S.Button onClick={emptySortedItems}>정렬 초기화</S.Button>
          </S.Box>
        </S.Section>

        <S.Contents>
          <S.GridHeader>
            <S.Title>상품번호</S.Title>
            <S.Title>거래일&거래시간</S.Title>
            <S.Title>주문처리상태</S.Title>
            <S.Title>고객번호</S.Title>
            <S.Title>고객이름</S.Title>
            <S.Title>가격</S.Title>
          </S.GridHeader>

          {displayDatas?.slice(pages, perpageItems).map((x: DataProps) => (
            <S.GridItems key={x.id}>
              <S.Text className="id">{x.id}</S.Text>
              <S.Text>{x.transaction_time}</S.Text>
              <S.Text className="status" status={x.status}>
                {x.status ? '진행' : '완료'}
              </S.Text>
              <S.Text>{x.customer_id}</S.Text>
              <S.Text>{x.customer_name}</S.Text>
              <S.Text>{x.currency}</S.Text>
            </S.GridItems>
          ))}

          <S.Pagination>
            <S.ImgBtn
              disabled={pages === 0}
              onClick={() => {
                moveToPage(pages - 1);
              }}>
              <S.Image src="public/arrow-left.svg" alt="arrow-left" />
            </S.ImgBtn>
            {paginationPages.map((x, idx) => (
              <S.PageBox
                key={idx}
                active={x === pages}
                onClick={() => {
                  moveToPage(x);
                }}>
                <S.Pages>{x + 1}</S.Pages>
              </S.PageBox>
            ))}
            <S.ImgBtn
              disabled={pages === 5}
              onClick={() => {
                moveToPage(pages + 1);
              }}>
              <S.Image src="public/arrow-right.svg" alt="arrow-left" />
            </S.ImgBtn>
          </S.Pagination>
        </S.Contents>
      </S.Wrapper>
    </S.Container>
  );
};

export default OrderLists;

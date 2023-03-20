import { DataProps } from '@/types';

export const findTransactionsOnDate = (data: DataProps) => {
  return data
    ?.slice()
    .filter(
      (x: DataProps) => x.transaction_time.split(' ')[0] === '2023-03-08',
    );
};

export const sortDescId = (items: DataProps[]) => {
  return items.sort((a, b) => b.id - a.id).map((items: DataProps) => items);
};

export const sortDescDates = (items: DataProps[]) => {
  return items
    .sort(
      (a, b) =>
        new Date(b.transaction_time).getTime() -
        new Date(a.transaction_time).getTime(),
    )
    .map((items: DataProps) => items);
};

export const calcPageCount = (
  filteredDatas: DataProps[],
  perpageItems: number,
) => {
  return Math.ceil(filteredDatas?.length / perpageItems);
};

export const createPageNumbers = (allPages: number) => {
  return Array.from({ length: allPages }).map((_, i) => i);
};

export const sliceItemsForPage = (
  sortedItems: DataProps[],
  filteredDatas: DataProps[],
  pages: number,
  perpageItems: number,
) => {
  return sortedItems?.length > 0
    ? sortedItems.slice(pages * perpageItems, perpageItems * (pages + 1))
    : filteredDatas?.slice(pages * perpageItems, perpageItems * (pages + 1));
};

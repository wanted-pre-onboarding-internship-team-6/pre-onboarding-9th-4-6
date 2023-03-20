import { UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row, Select } from 'antd';

import {
  RowMargin,
  SearchContainer,
  Flex,
  SearchBarFontStyle,
  SearchBtnStyle,
} from 'styles/SearchBar';

import type { CheckboxValueType } from 'antd/es/checkbox/Group';

const Option = Select.Option;

const SearchBar = () => {
  const OrderStatus = {
    TRUE: true,
    FALSE: false,
  };

  const onFinish = (fieldsValue) => {};

  const onConditionChange = (value) => {};

  const onChange = (list: CheckboxValueType[]) => {};

  return (
    <SearchContainer>
      <RowMargin>
        <Row>
          <Col flex="420px">
            <Row>
              <Flex>
                <Col flex="100px">
                  <SearchBarFontStyle>고객이름</SearchBarFontStyle>
                </Col>
                <Col>
                  <Input
                    style={{ width: '150px', marginRight: '5px' }}
                    placeholder="고객이름"
                    prefix={<UserOutlined />}
                  />
                </Col>
              </Flex>
            </Row>
          </Col>

          <Col flex="550px"></Col>
        </Row>
      </RowMargin>

      <Row>
        <Col flex="520px">
          <Row>
            <Flex>
              <Col flex="100px">
                <SearchBarFontStyle>주문처리상태</SearchBarFontStyle>
              </Col>
              <Col>
                <Select style={{ width: '150px', marginRight: '5px' }}>
                  {Object.keys(OrderStatus).map((el) => (
                    <Option key={el}>{OrderStatus[el]}</Option>
                  ))}
                </Select>
              </Col>
            </Flex>
          </Row>
        </Col>
      </Row>

      <SearchBtnStyle>
        <Button type="primary" htmlType="submit">
          검색
        </Button>
      </SearchBtnStyle>
    </SearchContainer>
  );
};

export default SearchBar;

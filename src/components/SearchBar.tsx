import { useState } from 'react';

import { getOrders } from '@/api';

interface Props {
  page: string;
  sort: string;
  order: string;
}
export default function SearchBar({ page, sort, order }: Props) {
  const [name, setName] = useState('');

  const searchHandler = (event: any) => {
    event.preventDefault();
    getOrders({ page, sort, order, name });
  };

  const nameInputHandler = (event: any) => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={searchHandler}>
      <input
        type="text"
        placeholder="이름 검색"
        name="name"
        onChange={nameInputHandler}
        value={name}
      />
      <button type="submit">검색</button>
    </form>
  );
}

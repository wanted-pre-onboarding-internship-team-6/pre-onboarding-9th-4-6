import React, { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { QUERY_STRING } from '@/constants';

export default function useSearch() {
  const [name, setName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    searchParams.set(QUERY_STRING.search, name);
    searchParams.set(QUERY_STRING.page, '1');
    setSearchParams(searchParams);
  };

  const onReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setName('');
    searchParams.delete(QUERY_STRING.search);
    setSearchParams(searchParams);
  };

  return { name, onChange, onClick, onReset };
}

import { useSearchParams } from 'react-router-dom';

import { QUERY_STRING } from '@/constants';

type QueryStringKeys = keyof typeof QUERY_STRING;

type QueryString = {
  [K in QueryStringKeys]?: string;
};

export default function useQueryString() {
  const [searchParams, setSearchParams] = useSearchParams();

  function getQueryString() {
    return Object.fromEntries([...searchParams]);
  }

  function setQueryString(queryString: QueryString) {
    Object.entries(queryString).forEach(([key, value]) => {
      searchParams.set(key, value);
    });
    setSearchParams(searchParams);
  }

  function deleteQueryString(queryStrings: QueryStringKeys[]) {
    queryStrings.forEach((queryString) => {
      searchParams.delete(queryString);
    });
    setSearchParams(searchParams);
  }

  function deleteAllQueryString() {
    searchParams.forEach((_, key) => {
      searchParams.delete(key);
    });
    setSearchParams(searchParams);
  }

  return {
    getQueryString,
    setQueryString,
    deleteQueryString,
    deleteAllQueryString,
  };
}

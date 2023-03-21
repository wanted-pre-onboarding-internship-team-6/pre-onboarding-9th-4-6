import { ReactNode } from 'react';

import styled from '@emotion/styled';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header>주문 목록</Header>
      <Main>{children}</Main>
    </>
  );
}

const Header = styled.header({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '96px',
  fontSize: '48px',
  fontWeight: 'bold',
  borderBottom: '1px solid #000000',
  marginBottom: '20px',
});

const Main = styled.main({
  width: '954px',
  margin: '0 auto',
});

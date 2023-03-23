import styled from '@emotion/styled';

export default function OrderTableLoader() {
  return (
    <Container>
      <SearchBar>
        <TotalOrder />
        <SearchInput />
      </SearchBar>
      <Table />
      <Pagination />
    </Container>
  );
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const GreyBG = styled.div({
  width: '100%',
  backgroundColor: '#e2e2e2',
});

const SearchBar = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '954px',
  marginBottom: '20px',
});

const TotalOrder = styled(GreyBG)({
  width: '134px',
  height: '48px',
});

const SearchInput = styled(GreyBG)({
  width: '240px',
  height: '48px',
});

const Table = styled(GreyBG)({
  width: '954px',
  height: '580px',
  marginBottom: '48px',
});

const Pagination = styled(GreyBG)({
  width: '300px',
  height: '48px',
});

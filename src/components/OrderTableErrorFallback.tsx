import styled from '@emotion/styled';

interface Props {
  error: Error;
  resetErrorBoundary: (...args: unknown[]) => void;
}

export default function OrderTableErrorFallback({
  error,
  resetErrorBoundary,
}: Props) {
  console.error(error);

  return (
    <Container>
      <ErrorMessage>에러가 발생했습니다.</ErrorMessage>
      <RetryButton onClick={resetErrorBoundary}>재시도</RetryButton>
    </Container>
  );
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '744px',
  border: '4px solid #fd7e14',
});

const ErrorMessage = styled.p({
  fontSize: '48px',
  fontWeight: 'bold',
  marginBottom: '48px',
});

const RetryButton = styled.button({
  width: '102px',
  height: '48px',
  color: '#fd7e14',
  backgroundColor: 'transparent',
  borderColor: '#fd7e14',
  cursor: 'pointer',
});

import styled from 'styled-components';

import { StatusProps, PageProps } from './../../types/index';

export const Container = styled.div`
  padding: 3.6rem;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.2rem;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const Select = styled.select`
  font-size: 1.6rem;
  padding: 1rem;
`;

export const Option = styled.option``;

export const Label = styled.label`
  display: block;
  font-size: 1.6rem;
  line-height: 2;
  letter-spacing: 1px;
`;

export const Input = styled.input`
  padding: 1rem 2rem;
  width: 20rem;
  font-size: 1.6rem;
  font-family: inherit;
`;

export const Section = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const SearchText = styled.h1`
  font-size: 2rem;
  margin: 2rem 0;
  font-weight: 700;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Button = styled.button`
  font-family: inherit;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 1.2rem;
  background-color: #fff3bf;
  padding: 1.2rem;
  border-radius: 1rem;
  margin: 0;
  cursor: pointer;

  &:hover {
    background-color: #ffec99;
    color: #000;
  }

  & + button {
    background-color: #fff3bf;
  }

  & + button:hover {
    background-color: #ffec99;
    color: #000;
  }

  &:last-child {
    background-color: #dbe4ff;

    &:hover {
      background-color: #bac8ff;
    }
  }
`;

export const Contents = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: block;
  padding: 2rem;
  border-radius: 1rem;
`;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr repeat(2, 1fr) 1.5fr 1fr;
  gap: 1.6rem;
  justify-items: center;
  border-bottom: 1px solid gray;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 1.2rem;
  padding-top: 1rem;
`;

export const Text = styled.p<StatusProps>`
  font-size: 1.4rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 2rem 0;
  color: #000;

  &.id {
    font-weight: 600;
  }

  &.status {
    color: ${(props) => (props.status ? '#1864ab' : '#c92a2a')};
    font-weight: 600;
  }
`;

export const GridItems = styled(GridHeader)`
  gap: 2rem;
  align-content: center;
  margin: 1rem 0;
  font-size: 1.4rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 1.4rem;
  gap: 1.4rem;
  transition: all 0.3s ease;
  align-items: center;
`;

export const ImgBtn = styled.button<PageProps>`
  background-color: ${(props) => (props.disabled ? '#d3d3d3' : 'inherit')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: 0.5px solid #d3d3d3;
`;

export const Image = styled.img`
  width: 4.6rem;
  height: 4.6rem;
  object-fit: contain;
  display: block;
`;

export const PageBox = styled.div<PageProps>`
  background-color: ${(props) => (props.active ? '#d3d3d3' : 'inherit')};
  border-radius: 0.4rem;
`;

export const Pages = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  border: 1px solid #d7d7d6;
  border-radius: 0.4rem;
  cursor: pointer;
  display: flex;
  transition: all 0.6s ease;
  padding: 1rem 1.6rem;
`;

export const LoadingText = styled.h1`
  font-size: 2.6rem;
  color: #1864ab;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ErrorText = styled(LoadingText)`
  font-size: 2.6rem;
  color: #c92a2a;
`;

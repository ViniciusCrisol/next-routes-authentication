import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 30px;
  }

  a {
    width: 150px;
    height: 50px;

    border: none;
    margin-top: 15px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-weight: bold;
    text-decoration: none;

    transition: filter 200ms;

    &:hover {
      filter: brightness(1.05);
    }
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;

  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};

  color: white;
  font-weight: bold;

  cursor: pointer;
  transition: filter 200ms;

  & + button {
    margin-left: 15px;
  }

  &:hover {
    filter: brightness(1.05);
  }
`;

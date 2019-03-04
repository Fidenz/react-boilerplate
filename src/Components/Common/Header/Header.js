import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
`;

const Header = () => {
  return (
    <header>
      <Title>Logo</Title>
    </header>
  );
};

export {
  Header,
};
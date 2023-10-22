import { Bars } from 'react-loader-spinner';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 480px;
`;

export const PageLoader = () => (
  <Container>
    <Bars
      height="80"
      width="80"
      color="#1B365C"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </Container>
);

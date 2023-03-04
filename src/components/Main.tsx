import styled from 'styled-components';
import Container from './Container';

const StyledMain = styled.main`
  padding: 10px 0 35px 0;
  flex: 1 1 auto;
`;

export default function Main({children} : {children: React.ReactNode}) {
  return (
    <StyledMain>
      <Container>
        {children}
      </Container>
    </StyledMain>
  )
}

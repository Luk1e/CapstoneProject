import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 200px;
  z-index: 100;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  box-shadow: var(--shd, 0 0 5px rgba(0, 0, 0, 0.5));
`;

const InnerContainer = styled.div`
  width: 90vw;
  display: flex;
  padding: 15px 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--white);
  border-radius: 0.625rem;
  background-color: var(--primary);
`;

function Footer() {
  return (
    <Container>
      <InnerContainer>
        Copyright © 2024 Capstone Project. All rights reserved.
      </InnerContainer>
    </Container>
  );
}

export default Footer;

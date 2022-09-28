import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <p>Fisch Shop</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 1rem;
  margin: 4rem 0 0 0;
  border-top: 1px solid #000;
  color: #777;
`;

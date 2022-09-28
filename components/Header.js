import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledNavigation>
        <a>Startseite</a>
        <a>Produkte</a>
        <a>Kategorien</a>
      </StyledNavigation>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 1rem;
  margin: 0 0 4rem 0;
  border-bottom: 1px solid #000;
`;

const StyledNavigation = styled.nav`
  display: flex;
  gap: 2rem;
  a {
    color: #0385d3;
    text-decoration: none;
  }
  a:hover {
    color: #000;
    cursor: pointer;
  }
`;

import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      <StyledNavigation>
        <Link href="/" passHref>
          <NavLink active={pathname === "/"}>Startseite</NavLink>
        </Link>
        <Link href="/products" passHref>
          <NavLink active={pathname === "/products"}>Produkte</NavLink>
        </Link>
        <Link href="/categories" passHref>
          <NavLink active={pathname === "/categories"}>Kategorien</NavLink>
        </Link>
      </StyledNavigation>
    </StyledHeader>
  );
}

const NavLink = styled.a`
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  color: #0385d3;

  &:hover {
    cursor: pointer;
    color: black;
  }
`;

const StyledHeader = styled.header`
  padding: 1rem;
  margin: 0 0 4rem 0;
  border-bottom: 1px solid #000;
`;

const StyledNavigation = styled.nav`
  display: flex;
  gap: 2rem;
`;

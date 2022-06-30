import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: ${({ bg }) => bg || "#efec"};
  text-align: center;
  padding: 2rem 3rem;
  color: "#fff";
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  @media (max-width: 768px) {
   margin: 40px 0 30px;
  }
`;
export const Logo = styled.img`
 `
export const Image = styled.img`
width: 375px;
margin-left: 40px;


`
 
import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: ${({ theme }) => theme.light.header || theme.dark.header};
  text-align: center;
  padding: 2rem 3rem;
  font-size: 15px;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  @media (max-width: 768px) {
    margin: 40px 0 30px;
    flex-direction: column;
    gap: 1.5rem;
  }
`;
export const Logo = styled.img`
  color: #fff;
`;
export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
`;

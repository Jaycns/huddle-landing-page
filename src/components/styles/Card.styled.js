import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 3rem;
  padding: 60px;
  flex-direction: ${({ layout }) => layout || "row"};
  img {
    width: 250px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 11px;
    padding: 40px;
    &:last-child img {
      width: 100px;
    }
    img {
      width: 150px;
    }
  }
`;

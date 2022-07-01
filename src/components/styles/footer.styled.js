import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: green;
  color: #fff;
  padding: 100px 2.5rem 60px;

  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 20px;
  }
  p {
    text-align: right;
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;

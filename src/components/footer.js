import React from "react";
import { Box } from "./styles/container.styled";
import { Flex } from "./styles/Flex.styled";
import { FooterStyle } from "./styles/footer.styled";
import SocialIcons from "./styles/socialIcons";
function Footer() {
  return (
    <FooterStyle>
      <Box>
        <img src="./images/logo_white.svg" alt="dreams" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni
              repudiandae dolorem, itaque accusantium quisquam eaque hic sit.
              Similique, esse! ~ R-Amax
            </li>
            <li>+234-80-9357-5985</li>
            <li>amax@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Box>
    </FooterStyle>
  );
}

export default Footer;

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
              This is one of the popuar deigns out there, It's not a complicate one and
             is not difficult to implement. For more design ideas, you can make enquiries @jaycn ~ Jaycn
            </li>
            <li>+234-80-9357-5985</li>
            <li>jaycn@huddle.com</li>
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
        <p>&copy; Design by Jaycn 2021. All rights reserved</p>
      </Box>
    </FooterStyle>
  );
}

export default Footer;

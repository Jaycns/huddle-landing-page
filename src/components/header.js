import React from "react";
import { HeaderStyled, Logo, Nav, Image } from "./styles/header.styled";
import { Box } from "./styles/container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

const initialSideBarShow = window.matchMedia("(max-width: 768px)").matches;
function Header() {
  return (
    <HeaderStyled>
      <Box>
        <Nav>
          <Logo src="./images/logo.svg" alt="Logo" />
          <Button style={{ display: initialSideBarShow && "none" }}>
            Try it free
          </Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans WIll Love</h1>

            <p>
              Huddle re-imagines the way we build commuinities. You have a
              voice, but so does your audience. Create connections with your
              users as you engage in genuine discussion. ~R-amax😎
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="mockup" />
        </Flex>
      </Box>
    </HeaderStyled>
  );
}

export default Header;

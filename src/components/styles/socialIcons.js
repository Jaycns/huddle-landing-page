import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { StyledSocialIcons } from "./socialIcons.styled.js";
export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com/Jaycn_x">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="facebook.com/jude-okonkwo">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/jaycn-jude/">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://github.com/jaycns">
          <FaGithub />
        </a>
      </li>
    </StyledSocialIcons>
  );
}

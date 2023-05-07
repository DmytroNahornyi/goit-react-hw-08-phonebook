import {
  FooterSection,
  FooterContainer,
  FooterText,
  SocialLinks,
  SocialLink,
} from './Footer.styled';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterText>Project by 2023</FooterText>
        <SocialLinks>
          <SocialLink href="https://www.facebook.com/">
            <FaFacebook />
          </SocialLink>
          <SocialLink href="https://twitter.com/">
            <FaTwitter />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/">
            <FaInstagram />
          </SocialLink>
        </SocialLinks>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;

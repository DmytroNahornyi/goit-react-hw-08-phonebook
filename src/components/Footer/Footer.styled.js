import styled from 'styled-components';

export const FooterSection = styled.footer`
  background-color: #2c3e50;
  color: #fff;
  padding: 20px;
  box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.1);
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterText = styled.p`
  font-size: 18px;

  &:hover {
    color: greenyellow;
    transition: color 250ms linear;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #fff;
  border-radius: 50%;
  transition: background-color 250ms linear;

  &:hover {
    background-color: greenyellow;
    transition: background-color 250ms linear;
  }

  svg {
    font-size: 20px;
  }
`;

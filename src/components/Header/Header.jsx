import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selector/selectors';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import {
  HeaderContainer,
  HeaderLink,
  HeaderLinks,
  HeaderLogo,
  HeaderSection,
} from './Header.styled';

const Header = () => {
  const isAuth = useSelector(selectIsLoggedIn);

  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderLinks>
          {!isAuth && <HeaderLogo to="/">Phone book</HeaderLogo>}
          {isAuth && (
            <HeaderLink to="/phone-book/contacts">Phone book</HeaderLink>
          )}
        </HeaderLinks>
        {!isAuth ? <Navigation /> : <UserMenu />}
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;

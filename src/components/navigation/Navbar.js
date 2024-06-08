import React, { useContext } from 'react';
import LogoWithText from '../logo/LogoWithText';
import Logo from '../logo/LogoIcon';
import Container from '../layout/Container';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import Hider from '../layout/Hider';
import Button from '../buttons/Button';
import ChipsAmount from '../user/ChipsAmount';
import HamburgerButton from '../buttons/HamburgerButton';
import Spacer from '../layout/Spacer';
import Text from '../typography/Text';
import contentContext from '../../context/content/contentContext';
import Markdown from 'react-remarkable';

const StyledNav = styled.nav`
  padding: 1rem 0;
  position: absolute;
  z-index: 99;
  width: 100%;
  /* background-color: ${(props) => props.theme.colors.lightestBg}; */
`;

const Navbar = ({
  loggedIn,
  chipsAmount,
  location,
  openModal,
  openNavMenu,
  className,
}) => {

  const openShopModal = () =>
    openModal(
      () => (
        <Markdown>
          <Text textAlign="center" style={{"color" : "white"}}>
             We're currently working hard to get the shop up and running! Soon you'll be able to buy chip packages for competitive prices to enhance your gaming experience.
          </Text>
        </Markdown>
      ),
      'Shop',
      'Close',
    );

  if (!loggedIn)
    return (
      <StyledNav className={className}>
        <Container contentCenteredMobile>
          <Link to="/">
            <LogoWithText />
          </Link>

          <Hider hideOnMobile>
            <Spacer>
              {location.pathname !== '/register' && (
                <Button as={Link} to="/register" 
                  backgroundImage="linear-gradient(to bottom, #8cffdc, #52e8a6 8%, #15b671 51%, #099c6a 86%, #33d4a6)"
                  small>
                  Register
                </Button>
              )}
              {location.pathname !== '/login' && (
                <Button as={Link} to="/login" white small>
                 Login
                </Button>
              )}
            </Spacer>
          </Hider>
        </Container>
      </StyledNav>
    );
  else
    return (
      <StyledNav className={className}>
        <Container>
          <Link to="/">
            <Hider hideOnMobile>
              <LogoWithText />
            </Hider>
            <Hider hideOnDesktop>
              <Logo />
            </Hider>
          </Link>
          <Spacer>
            <ChipsAmount
              chipsAmount={chipsAmount}
              clickHandler={openShopModal}
            />
            <Hider hideOnMobile>
              <Button to="/" primary small onClick={openShopModal}>
                Buy Chips
              </Button>
            </Hider>
            <HamburgerButton clickHandler={openNavMenu} />
          </Spacer>
        </Container>
      </StyledNav>
    );
};

export default withRouter(Navbar);

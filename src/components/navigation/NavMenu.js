import React, { useContext } from 'react';
import styled from 'styled-components';
import CloseButton from '../buttons/CloseButton';
import Button from '../buttons/Button';
import Text from '../typography/Text';
import ColoredText from '../typography/ColoredText';
import ChipsAmount from '../user/ChipsAmount';
import { Link } from 'react-router-dom';
// import { Select } from '../forms/Select';
// import contentContext from '../../context/content/contentContext';
import Markdown from 'react-remarkable';
import socketContext from '../../context/websocket/socketContext';
import globalContext from '../../context/global/globalContext';

const NavMenuWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
`;

const StyledNavMenu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  width: 320px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.lightestBg};
  box-shadow: ${(props) => props.theme.other.navMenuDropShadow};
  overflow: hidden;

  @media screen and (max-width: 400px) {
    width: 85vw;
  }
`;

const MenuHeader = styled.div`
  padding: 0.5rem 1rem 0;
  justify-self: flex-start;
`;

const MenuItem = styled(Link)`
  display: flex;
  padding: 0.75rem 1rem;
  justify-content: space-between;
  width: 100%;
  text-align: right;
  font-family: ${(props) => props.theme.fonts.fontFamilySansSerif};
  color: white !important;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightestBg};
  background-color: ${(props) => props.theme.colors.lightBg} !important;
  font-size: ${(props) => props.theme.fonts.fontSizeParagraph};
  font-weight: normal;

  &:hover {
    background-color:black !important;
  }

  &:focus {
    outline: none;
    border-left: 4px solid ${(props) => props.theme.colors.primaryCta};
  }
`;

const MenuBody = styled.div`
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
`;

const MenuFooter = styled.div`
  padding: 0.5rem;
  margin: auto 0 0 0;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  margin: 1.5rem auto;
  justify-content: space-between;
  align-items: center;

  ${Button} {
    min-width: 6.5rem;
  }
`;

// const VerticalWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 1rem auto;
//   justify-content: center;
//   align-items: flex-start;
// `;

const SalutationText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.fontFamilySerif};
  font-size: 1.5rem;
  color: #239A3B;
  font-weight: 600 !important ;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const NavMenu = ({
  onClose,
  logout,
  userName,
  chipsAmount,
  openModal,
  // lang,
  // setLang,
}) => {
  const { players } = useContext(globalContext);
  const { cleanUp } = useContext(socketContext);

  const openShopModal = () =>
    openModal(
      () => (
        <Markdown>
          <Text textAlign="center" style={{"color": "white"}}>
            We're currently working hard to get the shop up and running! Soon you'll be able to buy chip packages for competitive prices to enhance your gaming experience.
          </Text>
        </Markdown>
      ),
      'Shop',
      'Close',
    );

  return (
    <NavMenuWrapper
      id="wrapper"
      onClick={(e) => {
        if (e.target.id === 'wrapper') {
          onClose();
        }
      }}
    >
      <StyledNavMenu>
        <IconWrapper>
          <CloseButton clickHandler={onClose} autoFocus />
        </IconWrapper>
        <MenuHeader>
          <SalutationText textAlign="left">
             Welcome back,
            <br />
            <ColoredText>{userName}!</ColoredText>
          </SalutationText>
          {players && (
            <SalutationText textAlign="left">
              Online: <ColoredText>{players.length}</ColoredText>
            </SalutationText>
          )}
          <HorizontalWrapper>
            <ChipsAmount
              chipsAmount={chipsAmount}
              clickHandler={openShopModal}
            />
            <Button onClick={openShopModal} small primary>
              Shop
            </Button>
          </HorizontalWrapper>
          {/* <HorizontalWrapper>
            <Select value={lang} onChange={(e) => setLang(e.target.value)}>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
            </Select>
          </HorizontalWrapper> */}
        </MenuHeader>
        <MenuBody>
          {/* <MenuItem
            as={Link}
            to="/poker"
            onClick={() => {
              onClose();
            }}
          >
            Go to Lobby
            <img
              src={lobbyIcon}
              alt="Lobby"
              width="25"
              style={{ width: '25px' }}
            />
          </MenuItem> */}
          <MenuItem
            as={Link}
            to="/dashboard"
            onClick={() => {
              onClose();
            }}
          >
            My Dashboard
            {/* <img
              src={userIcon}
              alt="Dashboard"
              width="25"
              style={{ width: '25px' }}
            /> */}
          </MenuItem>
          <MenuItem
            as={Link}
            to="/news"
            onClick={() => {
              onClose();
            }}
          >
            Latest News
            {/* <img
              src={newsIcon}
              alt="News"
              width="25"
              style={{ width: '25px' }}
            /> */}
          </MenuItem>
        </MenuBody>
        <MenuFooter>
          <Button
            onClick={() => {
              cleanUp();
              logout();
              onClose();
            }}
            primary
            fullWidth
            small
          >
            Logout
          </Button>
        </MenuFooter>
      </StyledNavMenu>
    </NavMenuWrapper>
  );
};

export default NavMenu;

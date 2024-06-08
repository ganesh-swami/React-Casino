import React, { useContext, useEffect } from "react";
import Container from "../components/layout/Container";
import Heading from "../components/typography/Heading";
import PropTypes from "prop-types";
// import ColoredText from "../components/typography/ColoredText";
// import jackImg from "../assets/img/jack-rounded-img@2x.png";
// import kingImg from "../assets/img/king-rounded-img@2x.png";
// import queenImg from "../assets/img/queen-rounded-img@2x.png";
import queen2Img from "../assets/img/queen2-rounded-img@2x.png";
import styled from "styled-components";
// import Text from "../components/typography/Text";
import { withRouter } from "react-router-dom";
// import useScrollToTopOnPageLoad from "../hooks/useScrollToTopOnPageLoad";
import globalContext from "../context/global/globalContext";
// import contentContext from "../context/content/contentContext";
import modalContext from "../context/modal/modalContext";
// import tableContext from "../context/table/tableContext";
const WelcomeHeading = styled(Heading)`
  color: ${(props) => props.theme.colors.fontColorLight};
  text-shadow: 0 0 10px #5be6fe;

  @media screen and (min-width: 468px) and (min-height: 600px) {
    margin: 2rem auto;
  }

  @media screen and (max-width: 900px) and (max-height: 450px) and (orientation: landscape) {
    display: none;
  }
`;

const MainMenuWrapper = styled.div`
  margin: 50px 0 auto 0;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(3, minmax(304px, auto));
  grid-template-rows: repeat(1, minmax(317px, auto));
  grid-gap: 2rem;
  max-width: 600px;

  @media screen and (max-width: 1280px) and (max-height: 900px) and (orientation: landscape) {
    margin: 30px 0 auto 0;
    grid-template-columns: repeat(3, minmax(294px, auto));
    grid-template-rows: repeat(1, minmax(317px, auto));
    grid-gap: 1rem;
  }
  @media screen and (max-width: 900px) and (max-height: 450px) and (orientation: landscape) {
    margin: 30px 0 auto 0;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(1, minmax(140px, auto));
    grid-gap: 1rem;
  }

  @media screen and (max-width: 590px) and (max-height: 420px) and (orientation: landscape) {
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: repeat(1, minmax(120px, auto));
    grid-gap: 1rem;
  }

  @media screen and (max-width: 468px) {
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(4, auto);
    grid-gap: 1rem;
  }
`;

const MainMenuCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border: 2px solid #e8f9ff;
  background-color: ${(props) => props.theme.colors.playingCardBg};
  border-radius: ${(props) => props.theme.other.stdBorderRadius};
  padding: 1.5rem 2rem;
  box-shadow: 0 0 10px #00baff, 0 0 20px #00baff, 0 0 10px #00baff inset,
    0 0 20px #00baff inset, 0 0 30px rgba(0, 186, 255, 0.6) inset;

  &,
  & > * {
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
  }

  ${Heading} {
    margin-bottom: 0;
    color: ${(props) => props.theme.colors.primaryCta};
    word-wrap: break-word;
  }

  img {
    margin: 1rem;
    width: 75%;
    max-width: 170px;
  }

  @media screen and (min-width: 648px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 648px) {
    padding: 0.5rem;
  }

  @media screen and (max-width: 468px) {
    flex-direction: row;
    justify-content: space-between;
    border-radius: 90px 40px 40px 90px;
    padding: 0 1rem 0 0;

    ${Heading} {
      text-align: right;
      margin: 0 1rem;
    }

    img {
      max-width: 80px;
      margin: 0;
    }
  }
`;

const GameRooms = ({ history }) => {
  const { userName } = useContext(globalContext);
  const { openModal } = useContext(modalContext);
  // const { getCurrentTable, tables, entryTableId, setEntryTableId } = useContext(tableContext);
  // useScrollToTopOnPageLoad();
  // useEffect(() => {
  //   getCurrentTable()
  // })
  return (
    <Container
      fullHeight
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
      padding="6rem 2rem 2rem 2rem"
    >
      <WelcomeHeading as="h2" textCentered>
        {/* Welcome back,{' '} */}
        {/* <ColoredText>{userName}!</ColoredText> */}
      </WelcomeHeading>
      <MainMenuWrapper>
        {/* {tables &&
          tables.map((table) => {
            return (
              <MainMenuCard
                onClick={() => {
                  setEntryTableId(table.tableNumber);
                  history.push("/play");
                }}
              >
                <img src={queen2Img} alt="Quick Game" />
                <Heading as="h3" headingClass="h5" textCentered>
                  Room {table.tableNumber}
                </Heading>
              </MainMenuCard>
            );
          })} */}
      </MainMenuWrapper>
    </Container>
  );
};

GameRooms.propTypes = {
  userName: PropTypes.string,
};

export default withRouter(GameRooms);

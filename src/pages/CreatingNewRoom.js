import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import HeadingWithLogo from "../components/typography/HeadingWithLogo";
import Button from "../components/buttons/Button";
import { FormGroup } from "../components/forms/FormGroup";
import { Label } from "../components/forms/Label";
import { Input } from "../components/forms/Input";
import styled from "styled-components";
import { Form } from "../components/forms/Form";
import RelativeWrapper from "../components/layout/RelativeWrapper";
import globalContext from "../context/global/globalContext";
// import tableContext from "../context/table/tableContext";
import gameContext from "../context/game/gameContext";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin-bottom: 2rem;

  ${FormGroup} > *~* {
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 624px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 160px;

    ${FormGroup} > *~* {
      margin: 0.5rem 0;
    }
  }
`;

// const DangerButton = styled(Button)`
//   background-color: ${(props) => props.theme.colors.dangerColorLighter};
//   color: ${(props) => props.theme.colors.fontColorLight};

//   &:visited,
//   &:hover,
//   &:active,
//   &:focus {
//     background-color: ${(props) => props.theme.colors.dangerColor};
//     color: ${(props) => props.theme.colors.fontColorLight};
//   }
// `;

const CreatingNewRoom = ({ history }) => {
  const { chipsAmount } = useContext(globalContext);
  const [number, setNumber] = useState(5);
  const { createTable } = useContext(gameContext);
  // const { createTable, amount, setAmount } = useContext(tableContext);
  const [amount, setAmount] = useState(1000);
  const [flag, setFlag] = useState(0);
  
  const changeNumberInputHandle = (e) => {
    if (e.target.value < 2) setNumber(2);
    else if (e.target.value > 5) setNumber(5);
    else setNumber(e.target.value);
  };

  const changeAmount = (e) => {
    if (chipsAmount > 10000) {
      if (e.target.value <= 10000) {
        setAmount(e.target.value);
        setFlag(1);
      }
    } else {
      if (e.target.value >= chipsAmount) {
        setAmount(chipsAmount);
        setFlag(1);
      }
    }
    if (amount < 1000) {
      setFlag(0);
    }
  };

  const onCreate = () => {
    if (flag) {
      createTable(amount, number);
      setTimeout(() => {
        history.push("/play");
      }, 1000);
    }
  }

  useEffect(() => {
    if (amount >= 1000) {
      setFlag(1);
    }
  }, [amount]);

  return (
    <RelativeWrapper>
      {/* <TiledBackgroundImage /> */}
      <Container
        fullHeight
        flexDirection="column"
        justifyContent="center"
        contentCenteredMobile
        alignItems="center"
        padding="6rem 2rem 2rem 2rem"
      >
        <Form onSubmit={(e) => e.preventDefault()}>
          <HeadingWithLogo textCentered hideIconOnMobile={false}>
            Create New Table
          </HeadingWithLogo>
          <Wrapper>
            <FormGroup style={{ gridColumnStart: "1", gridColumnEnd: "3" }}>
              <Label>Seat Number</Label>
              <Input
                id="number"
                type="number"
                value={number}
                onChange={changeNumberInputHandle}
              />
            </FormGroup>
            <FormGroup style={{ gridColumnStart: "1", gridColumnEnd: "3" }}>
              <Label>Amount</Label>
              <Input
                id="number"
                type="number"
                value={amount}
                min={1000}
                max={chipsAmount <= 10000 ? chipsAmount : 10000}
                onChange={changeAmount}
              />
            </FormGroup>
            <FormGroup style={{ gridColumnStart: "1", gridColumnEnd: "3" }}>
              <Button
                secondary
                onClick={() => onCreate()}
              >
                Create
              </Button>
            </FormGroup>
            <Button
              as={Link}
              to="/"
              secondary
              style={{ gridColumnStart: "1", gridColumnEnd: "3" }}
            >
              Back to Lobby
            </Button>
          </Wrapper>
        </Form>
      </Container>
    </RelativeWrapper>
  );
};

export default CreatingNewRoom;

import React from "react";
import Container from "../components/layout/Container";
import CenteredBlock from "../components/layout/CenteredBlock";
import Heading from "../components/typography/Heading";
import Button from "../components/buttons/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useScrollToTopOnPageLoad from "../hooks/useScrollToTopOnPageLoad";

const NotFoundPage = () => {
  useScrollToTopOnPageLoad();

  return (
    <Container fullHeight contentCenteredMobile padding="8rem 2rem 2rem 2rem">
      <CenteredBlock>
        <Heading
          as="h2"
          headingClass="h1"
          textCenteredOnMobile
          className="items-center"
        >
          Page Not Found!
        </Heading>
        <Heading as="h3" headingClass="h5" textCenteredOnMobile></Heading>
        <Wrapper>
          <Button as={Link} to="/" large primary fullWidthOnMobile autoFocus>
            Go Back
          </Button>
        </Wrapper>
      </CenteredBlock>
    </Container>
  );
};

const Wrapper = styled.div`
  @media screen and (min-width: 1024px) {
    margin-top: 1.5rem;
  }
`;

export default NotFoundPage;

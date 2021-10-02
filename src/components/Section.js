import React from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import Fade from "react-reveal/Fade";
<Fade top>
  <h1>React Reveal</h1>
</Fade>;
const Section = ({
  title,
  description,
  link,
  buttonLeft,
  buttonRight,
  bgimg,
}) => {
  return (
    <Wrap Bgimg={bgimg}>
      <Fade top>
        <Text>
          <h1>{title} </h1>
          <p>
            {description}
            <a href="">{link} </a>
          </p>
        </Text>
      </Fade>
      <Fade top>
        <Button>
          <ButtonGroup>
            <ButtonLeft> {buttonLeft} </ButtonLeft>
            <ButtonRight> {buttonRight} </ButtonRight>
          </ButtonGroup>
          <ButtonIcon> </ButtonIcon>
        </Button>
        </Fade>
    </Wrap>
  );
};

export default Section;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: ${(props) => `url("${props.Bgimg}")`};
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
`;
const Text = styled.div`
  text-align: center;
  padding-top : 10vh;
  p,
  a {
    color: grey;
    margin-left: 5px;
    font-size: 14px;
  }
  a:hover {
    color: black;
    text-decoration: underline 2px;
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const ButtonLeft = styled.div`
  margin-left: 10px;
  background-color: black;
  color: white;
  border-radius: 999999999999999px;
  cursor: pointer;
  opacity: 0.66;
  height: 40px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonRight = styled(ButtonLeft)`
  background-color: white;
  color: black;
`;
const ButtonIcon = styled(FaAngleDown)`
   color:grey;
  font-size: 30px;
  animation: animateDown infinite 1.5s ease-in-out;
  @keyframes animateDown {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(5px);
    }
    60% {
      transform: translateY(3px);
    }
  }
`;

import Body from "./Body";
import Title from "./Title";
import Header from "./Header";
import Button from "./Button";
import styled, { keyframes } from "styled-components";

import Footer from "./Footer";
import Article from "../../elements/Article";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity:1
  }
`;

const Card = styled(Article)`
  border-left: 8px solid ${({ color }) => color || "#ffffff"};
  overflow: hidden;
  max-width: 399px;
  height: 180px;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 8px 0.2px #d7d7e0;
  border-radius: 4px;
  padding: 0;
  box-sizing: border-box;
  background-color: #f2f2f2;
  animation: ${fadeIn} 0.2s linear;
`;

Card.Body = Body;
Card.Title = Title;
Card.Header = Header;
Card.Button = Button;
Card.Footer = Footer;

export default Card;

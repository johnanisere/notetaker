import styled from "styled-components";

import Button from "../../elements/Button";

export default styled(Button)`
  padding: 0px 12px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-left: 6px;
  font-size: 18px;
  padding: 5px 8px;
  cursor: pointer;
  color: #888888;
  transition: all 0.1s ease-in-out;
  transform: scale(0.98);
  &:hover {
    box-shadow: 1px 1px 2px 3px #ffffff;
    transform: scale(1);
  }
`;

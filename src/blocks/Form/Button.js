import styled from "styled-components";

import Button from "../../elements/Button";

export default styled(Button)`
  background: -webkit-linear-gradient(top right, #33bef6, #26aef4);
  color: #ffffff;
  font-size: 15px;
  margin-top: 15px;
  border-radius: 5px;
  cursor: pointer;
  border-color: #33bef6;
  padding: 10px 25px;
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.15s ease ease-in-out;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
`;

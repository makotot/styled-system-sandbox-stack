import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  SpaceProps,
  space
} from "styled-system";
import { Global } from "./components/Global";
import { stack } from "layout-pack";

console.log(stack({ child: "div", gutter: "1rem" }));
const Box = styled.div<SpaceProps & ColorProps & FlexboxProps>`
  ${space}
  ${color}
  ${flexbox}
`;
const Stack = styled.div`
  ${stack({
    child: Box,
    gutter: "1rem"
  })}
`;

function App() {
  return (
    <div>
      <Global />
      <Stack>
        <Box p="1rem" bg="blue" color="white">
          box
        </Box>
        <Box p="1rem" bg="blue" color="white">
          box
        </Box>
        <Box p="1rem" bg="blue" color="white">
          box
        </Box>
        <Box p="1rem" bg="blue" color="white">
          box
        </Box>
        <Box p="1rem" bg="blue" color="white">
          box
        </Box>
      </Stack>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

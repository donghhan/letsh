import "styled-components";
import { StyledBreakpointsTheme } from "styled-breakpoints";
import { primaryTheme } from "../src/styles/theme";

type PrimaryTheme = typeof primaryTheme;

declare module "styled-components" {
  export interface DefaultTheme extends PrimaryTheme, StyledBreakpointsTheme {}
}

import { css } from "styled-components";

export const SectionLayout = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.between("xs", "md")} {
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: row;
  }
`;

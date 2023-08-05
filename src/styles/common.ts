import { css } from "styled-components";

export const ResponsivePadding = css`
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-left: 5em;
    padding-right: 5em;
  }

  ${({ theme }) => theme.breakpoints.between("xs", "md")} {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
`;

export const FormSectionStyle = css`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

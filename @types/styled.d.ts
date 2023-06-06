import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      black: string;
      white: string;
      gray: string;
    };

    font: {
      robotoMono: string;
      openSans: string;
    };
  }
}

import "i18next";
import { resources, defaultNS } from "../src/i18n";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)["en"];
  }
}

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

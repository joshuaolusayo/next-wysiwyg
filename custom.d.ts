// custom.d.ts

import { BaseElement } from "slate";

export type FormattedText = {
  type?: string;
  text: string;
  bold?: true;
  italic?: true;
  underline?: true;
  code?: true;
  "align-left"?: true;
  "align-right"?: true;
  "align-center"?: true;
  "bulleted-list"?: true;
  "numbered-list"?: true;
};
export type CustomText = FormattedText;

declare module "slate" {
  export interface BaseElement {
    type: string;
  }
  export interface Node extends BaseElement {
    selected: boolean;
    type: string;
  }
  export interface BaseEditor {
    type: string;
  }
  interface CustomTypes {
    Text: CustomText;
  }
}

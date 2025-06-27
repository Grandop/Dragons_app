import { createElement, ReactNode } from "react";
import { FONT_SIZES_PROPS, FONT_WEIGHTS_PROPS } from "./constants";
import styled, { CSSProperties } from "styled-components";

export type TagVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

export interface TypographyProps extends CSSProperties {
  fontSize?: keyof typeof FONT_SIZES_PROPS;
  fontWeight?: keyof typeof FONT_WEIGHTS_PROPS;
  color?: string;
  tag?: TagVariants;
  children: ReactNode;
  className?: string;
  tabIndex?: number;
  "aria-label"?: string;
  onClick?: () => void;
}

interface DynamicTypographyProps extends Omit<TypographyProps, "tag"> {
  tag: string;
}

export const DynamicTypography = styled(
  ({ tag, children, ...props }: DynamicTypographyProps) =>
    createElement(tag, props, children)
)`
  color: ${({ color }) => color};
  font-size: ${({ fontSize = "p1" }) =>
    FONT_SIZES_PROPS[fontSize] || FONT_SIZES_PROPS.p1};
  font-weight: ${({ fontWeight = "regular" }) =>
    FONT_WEIGHTS_PROPS[fontWeight] || FONT_WEIGHTS_PROPS.regular};
  overflow-wrap: break-word;
  margin: 0;
`;

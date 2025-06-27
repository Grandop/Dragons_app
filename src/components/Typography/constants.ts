import { theme } from "../../theme/index";

export const FONT_SIZES_PROPS = {
  ...theme.fontSizes.headings,
  ...theme.fontSizes.paragraph
};

export const FONT_WEIGHTS_PROPS = {
  ...theme.fontWeight
};

// Map typography variants to HTML tags
export const MAPPED_TAGS = {
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
  heading4: "h4",
  heading5: "h5",
  heading6: "h6",
  p: "p",
  p1: "p",
  p2: "p"
} as const;

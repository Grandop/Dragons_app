import { ThemeType } from "./styled";

export const theme: ThemeType = {
  fontSizes: {
    headings: {
      heading1: "26px",
      heading2: "24px",
      heading3: "16px",
      heading4: "35px",
      heading5: "20px",
      heading6: "48px"
    },
    paragraph: {
      p: "10px",
      p1: "12px",
      p2: "14px"
    }
  },
  fontWeight: {
    regular: 400,
    semibold: 600,
    bold: 700
  },
  borderRadius: {
    xs: "10px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
    xxl: "48px",
    circle: "50%"
  },
  zIndex: {
    z0: "0",
    z10: "10",
    z20: "20",
    z30: "30",
    z40: "40",
    z50: "50",
    zAuto: "auto"
  },
  colors: {
    neutral: {
      0: "#fbfdfe",
      100: "#ededed",
      200: "#d6e2f5",
      300: "#c7c7c7",
      400: "#545969",
      500: "#2f364b",
      600: "#212636",
      700: "#09153e"
    },
    red: {
      100: "#f25c54",
      200: "#de473f",
      300: "#c7221a"
    }
  }
};

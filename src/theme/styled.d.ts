import "styled-components";

type ThemeType = {
  fontSizes: {
    headings: {
      heading1: string;
      heading2: string;
      heading3: string;
      heading4: string;
      heading5: string;
      heading6: string;
    };
    paragraph: {
      p: string;
      p1: string;
      p2: string;
    };
  };
  fontWeight: {
    regular: number;
    semibold: number;
    bold: number;
  };
  borderRadius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    circle: string;
  };
  zIndex: {
    z0: string;
    z10: string;
    z20: string;
    z30: string;
    z40: string;
    z50: string;
    zAuto: string;
  };
  colors: {
    neutral: {
      0: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
    };
    red: {
      100: string;
      200: string;
      300: string;
    };
  };
};

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}

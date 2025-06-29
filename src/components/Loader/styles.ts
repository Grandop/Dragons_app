import styled, { css, keyframes } from "styled-components";

const loaderVariants = {
  white: css`
    background:
      radial-gradient(
          farthest-side,
          ${(props) => props.theme.colors.neutral[0]} 94%,
          #0000
        )
        top/8px 8px no-repeat,
      conic-gradient(#0000 30%, ${(props) => props.theme.colors.neutral[0]});
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 8px),
      #000 0
    );
  `,
  blue: css`
    background:
      radial-gradient(
          farthest-side,
          ${(props) => props.theme.colors.neutral[700]} 94%,
          #0000
        )
        top/8px 8px no-repeat,
      conic-gradient(#0000 30%, ${(props) => props.theme.colors.neutral[700]});
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 8px),
      #000 0
    );
  `
};

const rotateAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

export const Loader = styled.div<{ $variant?: "white" | "blue" }>`
  width: 30px;
  height: 30px;
  border-radius: ${(props) => props.theme.borderRadius.circle};
  justify-self: center;

  ${({ $variant = "white" }) => loaderVariants[$variant]}

  animation-name: ${rotateAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

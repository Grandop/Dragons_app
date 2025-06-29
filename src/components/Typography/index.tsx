import { MAPPED_TAGS } from "./constants";
import { TypographyProps } from "./styles";
import * as S from "./styles";

export const Typography = ({
  tag,
  children,
  fontWeight,
  fontSize = "p1",
  className,
  onClick,
  color,
  ...props
}: TypographyProps) => {
  const selectedTag = tag || (fontSize && MAPPED_TAGS[fontSize]) || "p";

  return (
    <S.DynamicTypography
      tag={selectedTag}
      fontSize={fontSize}
      fontWeight={fontWeight}
      className={className}
      onClick={onClick}
      color={color}
      {...props}
    >
      {children}
    </S.DynamicTypography>
  );
};

import * as S from "./styles";
import { EmptyDragonIcon } from "../EmptyDragonIcon";

interface AvatarProps {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  border?: boolean;
}

export const Avatar = ({
  src,
  alt = "Avatar",
  width,
  height,
  border
}: AvatarProps) => {
  return (
    <S.AvatarContainer
      $width={width}
      $height={height}
      $border={border}
      data-testid="avatar-container"
    >
      {src ? <S.AvatarImage src={src} alt={alt} /> : <EmptyDragonIcon />}
    </S.AvatarContainer>
  );
};

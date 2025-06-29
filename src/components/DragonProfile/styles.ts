import { SiDragonframe } from "react-icons/si";
import { styled } from "styled-components";
import { Typography } from "../Typography";

export const DragonCard = styled.div`
  background: ${({ theme }) => theme.colors.neutral[800]};
  border: 1px solid ${({ theme }) => theme.colors.neutral[400]};
  border-radius: 16px;
  overflow: hidden;
  position: relative;
`;

export const ProfileSection = styled.div`
  padding: 32px;
  position: relative;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const DragonAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.neutral[600]};
  border: 4px solid ${({ theme }) => theme.colors.red[100]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: ${({ theme }) => theme.colors.neutral[300]};
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const ProfileInfo = styled.div`
  flex: 1;
`;

export const EmptyDragonIcon = styled(SiDragonframe)`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  color: ${({ theme }) => theme.colors.neutral[200]};
`;

export const DragonName = styled(Typography).attrs((props) => ({
  fontSize: "heading1",
  ...props
}))`
  color: ${({ theme }) => theme.colors.neutral[0]};
  font-weight: bold;
  margin-bottom: 8px;
  line-height: 1.2;
`;

export const DragonSubtitle = styled(Typography).attrs((props) => ({
  fontSize: "heading3",
  ...props
}))`
  color: ${({ theme }) => theme.colors.neutral[200]};
  margin-bottom: 16px;
`;

export const DragonType = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.red[100]};
  color: ${({ theme }) => theme.colors.neutral[0]};
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
`;

export const HistorySection = styled.div`
  margin-top: 32px;
`;

export const SectionTitle = styled(Typography).attrs((props) => ({
  fontSize: "heading1",
  ...props
}))`
  color: ${({ theme }) => theme.colors.neutral[0]};
  font-weight: bold;
  margin-bottom: 16px;
`;

export const HistoryText = styled(Typography).attrs((props) => ({
  fontSize: "heading3",
  ...props
}))`
  color: ${({ theme }) => theme.colors.neutral[100]};
  line-height: 1.6;
  margin: 0;
`;

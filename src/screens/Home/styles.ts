import { styled } from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.neutral[700]};
  padding: 32px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const SettingsButton = styled.button`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.neutral[0]};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &::before {
    content: "⚙️";
    font-size: 18px;
  }
`;

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

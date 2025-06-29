import { styled } from "styled-components";

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

export const SettingsContainer = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.neutral[800]};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.neutral[0]};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral[500]};
  }
`;

import { styled } from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
`;

export const DragonIcon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  background: ${({ theme }) => theme.colors.neutral[900]};
  border: 1px solid ${({ theme }) => theme.colors.neutral[800]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 24px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral[800]};
    border-color: ${({ theme }) => theme.colors.neutral[800]};
    transform: translateY(-2px);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-right: 40px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.neutral[300]};
  font-size: ${({ theme }) => theme.fontSizes.paragraph.p2};
  line-height: 1.5;
  margin: 0 0 24px 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Footer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
`;

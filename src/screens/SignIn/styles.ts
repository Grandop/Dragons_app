import { styled } from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

export const LoginCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 40px;
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.headings.heading4};
  color: ${({ theme }) => theme.colors.neutral[700]};
  text-align: center;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: ${({ theme }) => theme.colors.neutral[700]};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  font-size: ${({ theme }) => theme.fontSizes.paragraph.p2};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[400]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral[300]};
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red[100]};
  font-size: ${({ theme }) => theme.fontSizes.paragraph.p1};
  margin-top: 5px;
`;

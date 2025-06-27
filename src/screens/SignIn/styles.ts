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

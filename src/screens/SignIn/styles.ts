import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 32px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
`;

export const LoginCard = styled.div`
  background: ${({ theme }) => theme.colors.neutral[0]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 40px;
  width: 100%;
  max-width: 400px;
  margin: 20px 0;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.headings.heading4};
  color: ${({ theme }) => theme.colors.neutral[700]};
  text-align: center;
  margin-bottom: 30px;
`;

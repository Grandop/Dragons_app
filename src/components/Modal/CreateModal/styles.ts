import { styled } from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ImagePreview = styled.div`
  margin-top: 12px;
  text-align: center;
`;

export const PreviewImage = styled.img`
  max-width: 120px;
  max-height: 120px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.neutral[400]};
  margin-bottom: 12px;
`;

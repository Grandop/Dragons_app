import { IoChevronBackOutline } from "react-icons/io5";
import { styled } from "styled-components";
import { Typography } from "../../components/Typography";

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.neutral[800]} 0%,
    ${({ theme }) => theme.colors.neutral[700]} 50%,
    ${({ theme }) => theme.colors.neutral[800]} 100%
  );
  padding: 0;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 24px;

  @media (max-width: 768px) {
    padding: 20px 16px;
    gap: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const ChevronLeftIcon = styled(IoChevronBackOutline)`
  margin-right: 8px;
`;

export const Title = styled(Typography).attrs(() => ({
  fontSize: "heading1",
  fontWeight: "bold"
}))`
  color: ${({ theme }) => theme.colors.neutral[0]};
  margin: 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.neutral[0]} 0%,
    ${({ theme }) => theme.colors.red[100]} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 640px) {
    font-size: 24px;
  }
`;

export const FormCard = styled.div`
  background: ${({ theme }) => theme.colors.neutral[600]};
  border: 1px solid ${({ theme }) => theme.colors.neutral[500]};
  border-radius: 16px;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  padding: 32px 40px 24px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.neutral[700]} 0%,
    ${({ theme }) => theme.colors.neutral[600]} 100%
  );
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[500]};

  @media (max-width: 768px) {
    padding: 24px 24px 20px;
  }
`;

export const CardTitle = styled(Typography).attrs(() => ({
  fontSize: "heading1",
  fontWeight: "bold"
}))`
  color: ${({ theme }) => theme.colors.neutral[0]};
  margin-bottom: 8px;
`;

export const FormContent = styled.div`
  padding: 32px 40px;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const FormSection = styled.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const SectionTitle = styled(Typography).attrs(() => ({
  fontSize: "heading2",
  fontWeight: "bold"
}))`
  color: ${({ theme }) => theme.colors.neutral[0]};
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.neutral[500]};
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ImageSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 32px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const ImageInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ImagePreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 200px;

  @media (max-width: 768px) {
    justify-content: center;
    min-height: 160px;
  }
`;

export const PreviewImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.red[100]};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.neutral[700]};

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 200px;
  height: 200px;
  border: 2px dashed ${({ theme }) => theme.colors.neutral[400]};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: ${({ theme }) => theme.colors.neutral[700]};

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

export const FormFooter = styled.div`
  padding: 24px 40px 32px;
  background: ${({ theme }) => theme.colors.neutral[700]};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[500]};
  margin: 32px -40px -32px;

  @media (max-width: 768px) {
    padding: 20px 24px 24px;
    margin: 24px -24px -24px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;

  @media (max-width: 640px) {
    flex-direction: column-reverse;
  }
`;

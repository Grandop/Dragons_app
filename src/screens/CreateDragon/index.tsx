import { useCreateDragon } from "./hook/useCreateDragon";
import * as S from "./styles";
import { Button } from "@components/Button";
import { EmptyDragonIcon } from "@components/EmptyDragonIcon";
import { Input } from "@components/Input";
import { TextArea } from "@components/TextArea";
import { Typography } from "@components/Typography";

export const CreateDragon = () => {
  const {
    errors,
    handleFormSubmit,
    handleSubmit,
    isCreating,
    register,
    watch,
    handleBack,
    theme
  } = useCreateDragon();

  const watchedImageUrl = watch("imageUrl");

  return (
    <S.Container>
      <S.MainContent>
        <S.Header>
          <Button
            width="90px"
            backgroundColor={theme.colors.neutral[800]}
            onClick={handleBack}
          >
            <S.ChevronLeftIcon size={20} />
            Voltar
          </Button>
          <S.Title>Criar Novo Dragão</S.Title>
        </S.Header>

        <S.FormCard>
          <S.CardHeader>
            <S.CardTitle>Dados do Dragão</S.CardTitle>
            <Typography
              color={theme.colors.neutral[0]}
              fontSize="p2"
              fontWeight="regular"
            >
              Preencha as informações abaixo para criar seu dragão único
            </Typography>
          </S.CardHeader>

          <S.FormContent>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <S.FormSection>
                <S.SectionTitle>Informações Básicas</S.SectionTitle>

                <S.InputGrid>
                  <S.FormGroup>
                    <Input
                      label="Nome do Dragão"
                      id="name"
                      placeholder="Ex: Vhagar, Balerion, Drogon..."
                      {...register("name")}
                      error={errors.name}
                      variant="dark"
                    />
                  </S.FormGroup>

                  <S.FormGroup>
                    <Input
                      label="Tipo do Dragão"
                      id="type"
                      placeholder="Ex: Dragão de Fogo, Dragão de Gelo..."
                      {...register("type")}
                      error={errors.type}
                      variant="dark"
                    />
                  </S.FormGroup>
                </S.InputGrid>
              </S.FormSection>

              <S.FormSection>
                <S.SectionTitle>Aparência</S.SectionTitle>

                <S.ImageSection>
                  <S.ImageInputContainer>
                    <Input
                      id="imageUrl"
                      label="URL da Imagem"
                      type="url"
                      placeholder="https://exemplo.com/dragao.jpg"
                      {...register("imageUrl")}
                      variant="dark"
                      error={errors.imageUrl}
                    />
                  </S.ImageInputContainer>

                  <S.ImagePreviewContainer>
                    {watchedImageUrl ? (
                      <S.PreviewImage
                        src={watchedImageUrl}
                        alt="Preview do dragão"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    ) : (
                      <S.ImagePlaceholder>
                        <EmptyDragonIcon />
                        <Typography
                          fontSize="p2"
                          fontWeight="semibold"
                          color={theme.colors.neutral[300]}
                        >
                          Preview da imagem
                        </Typography>
                      </S.ImagePlaceholder>
                    )}
                  </S.ImagePreviewContainer>
                </S.ImageSection>
              </S.FormSection>

              <S.FormSection>
                <S.SectionTitle>História ou Descrição</S.SectionTitle>
                <S.FormGroup>
                  <TextArea
                    id="histories"
                    placeholder="Conte a história deste dragão... Suas origens, poderes únicos, batalhas épicas e características especiais..."
                    register={register("histories")}
                    error={errors.histories}
                  />
                </S.FormGroup>
              </S.FormSection>

              <S.FormFooter>
                <S.ButtonGroup>
                  <Button
                    backgroundColor={theme.colors.neutral[800]}
                    type="button"
                    onClick={handleBack}
                  >
                    Cancelar
                  </Button>
                  <Button
                    backgroundColor={theme.colors.red[100]}
                    type="submit"
                    loading={isCreating}
                    loaderColor="blue"
                  >
                    Criar Dragão
                  </Button>
                </S.ButtonGroup>
              </S.FormFooter>
            </form>
          </S.FormContent>
        </S.FormCard>
      </S.MainContent>
    </S.Container>
  );
};

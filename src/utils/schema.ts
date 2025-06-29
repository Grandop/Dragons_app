import z from "zod";

export const dragonSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .min(2, "Nome deve ter pelo menos 2 caracteres"),
  imageUrl: z
    .string()
    .min(1, "URL da imagem é obrigatória")
    .url("URL inválida"),
  type: z.string().min(1, "Tipo é obrigatório"),
  histories: z.string().min(1, "Descrição é obrigatória")
});

export type DragonFormData = z.infer<typeof dragonSchema>;

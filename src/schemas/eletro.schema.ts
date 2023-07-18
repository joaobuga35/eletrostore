import { z } from "zod";

const eletroSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter no mínimo 3 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres")
    .nonempty("Nome é obrigatório"),
  image: z.string().url(),
  description: z
    .string()
    .nonempty("A descrição é obrigatória")
    .max(255, "Máximo de 255 caracteres"),
  tension: z
    .string()
    .nonempty("A tensão é obrigatória")
    .max(4, "EX: 220V OU 110V"),
  brand: z.string().nonempty("A marca é obrigatória"),
  price: z.string().nonempty(),
});

const eletroEditSchema = eletroSchema.partial();
type eletroData = z.infer<typeof eletroSchema>;
type eletroDataEdit = z.infer<typeof eletroEditSchema>;
export { eletroSchema, type eletroData, type eletroDataEdit, eletroEditSchema };

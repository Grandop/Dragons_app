import { Dragon } from "../../../entities/dragon";

export type CreateDragonParams = Omit<Dragon, "id" | "createdAt">;

export type EditDragonParams = Omit<Dragon, "createdAt">;

export type DragonId = Pick<Dragon, "id">;

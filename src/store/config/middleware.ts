import { DragonService } from "../services/dragon";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (getDefaultMiddleware: any) => {
  const middleware = getDefaultMiddleware({
    serializableCheck: false
  }).concat(DragonService.middleware);

  return middleware;
};

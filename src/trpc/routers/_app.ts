import { categoriesRouter } from "@/modules/categories/server/procedure";
import { createTRPCRouter } from "../init";
import { studioRouter } from "@/modules/studio/server/procedures";
import { videosRouter } from "@/modules/videos/server/procedures";
import { videoViewsRouter } from "@/modules/videoViews/server/procedures";
import { videoReactionsRouter } from "@/modules/videoReactions/server/procedures";

export const appRouter = createTRPCRouter({
  studio: studioRouter,
  videos: videosRouter,
  categories: categoriesRouter,
  videoViews: videoViewsRouter,
  videoReactions: videoReactionsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

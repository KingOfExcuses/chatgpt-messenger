import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const chatsRouter = createTRPCRouter({
  createChat: publicProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const chat = await ctx.prisma.chat.create({
        data: {
          ...input,
        },
      });

      return chat;
    }),
});

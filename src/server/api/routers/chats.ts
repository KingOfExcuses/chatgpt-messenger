import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const chatsRouter = createTRPCRouter({
  createChat: publicProcedure
    .input(
      z.object({
        id: z.string(),
        content: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const chat = await ctx.prisma.chat.create({
        data: { id: input.id, content: input.content },
      });

      return chat;
    }),
});

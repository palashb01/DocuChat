import { initTRPC, TRPCError } from "@trpc/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();
const middleware = t.middleware;
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
const isAuth = middleware(async (opts) => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  if (!user || !user.id) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return opts.next({
    ctx: {
      userId: user.id,
      user,
    },
  });
});
// publicProcedure means anyone can call this method.
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);

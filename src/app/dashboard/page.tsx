// 'use client';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/db";
import Dashboard from "@/components/Dashboard";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  // This makes sure whether the user is logged in or not.
  if (!user || !user.id) redirect("/auth-callback?origin=dashboard");
  // This is done to make sure the user is synced to the database.
  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });
  if (!dbUser) redirect("/auth-callback?origin=dashboard");
  return <Dashboard />;
};

export default Page;

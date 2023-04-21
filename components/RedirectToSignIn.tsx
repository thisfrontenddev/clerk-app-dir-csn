import { auth } from "@clerk/nextjs/app-beta";
import { redirect } from "next/navigation";

export default function RedirectToSignIn() {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  return null;
}

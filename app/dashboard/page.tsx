import RedirectToSignIn from "@/components/RedirectToSignIn";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta";

export default function Page() {
  return (
    <div>
      <SignedIn>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>Welcome to this dashboard!</p>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}

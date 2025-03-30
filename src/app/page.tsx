import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
   <div className="m-10">

            <SignInButton>
                   <Button>signin</Button>

            </SignInButton>
   </div>
  );
}

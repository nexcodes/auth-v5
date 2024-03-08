"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

export type Provider = "google" | "github";

export const Social = () => {

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl")

  const socialOAuth = (provider: Provider) => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => socialOAuth("google")}
      >
        <FcGoogle size={20} />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => socialOAuth("github")}
      >
        <FaGithub size={20} />
      </Button>
    </div>
  );
};

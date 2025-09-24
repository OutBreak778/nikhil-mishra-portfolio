"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useAnimatedRouter() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);
  const [nextRoute, setNextRoute] = useState<string | null>(null);

  const navigate = (href: string) => {
    setIsExiting(true);
    setNextRoute(href);
  };

  const onExitComplete = () => {
    if (nextRoute) {
      router.push(nextRoute);
      setIsExiting(false);
      setNextRoute(null);
    }
  };

  return { isExiting, navigate, onExitComplete };
}

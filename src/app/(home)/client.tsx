"use client";

import { trpc } from "@/trpc/client";

export const Client = () => {
  const [data] = trpc.hello.useSuspenseQuery({ text: "jisu" });

  return <div>{data.greeting}</div>;
};

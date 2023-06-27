import React from "react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";

// const data =

export default function AdminDataPage() {
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/admin/signin");
  }, [data, status]);

  if (status === "loading") return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Hello {data?.user?.name}</h1>
    </div>
  );
}

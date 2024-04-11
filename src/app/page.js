"use client";

import { GlobalContext } from "@/context";
// import { getAllAdminProducts } from "@/services/product";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {" "}
      <h1>E-Commerce Website :-)</h1>{" "}
    </main>
  );
}

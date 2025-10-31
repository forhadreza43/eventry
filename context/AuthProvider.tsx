"use client";
import React, { useState } from "react";
import { AuthContext } from "./authContext";
import { AuthUser } from "@/definition/definition";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

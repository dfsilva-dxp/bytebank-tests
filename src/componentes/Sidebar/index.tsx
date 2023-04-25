import React from "react";
import { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <>
      <h1>Sidebar</h1>
      {children}
    </>
  );
}

import { ReactNode } from "react";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: ReactNode;
}) {
  return <section>{children}</section>;
}

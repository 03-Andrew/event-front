"use client";

import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className=" bg-[var(--secondary)] flex h-[100vh] w-full items-center justify-center p-6 md:p-10]">
      <LoginForm />
    </div>
  );
}

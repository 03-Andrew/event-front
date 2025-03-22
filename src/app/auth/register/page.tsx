"use client";

import { RegisterForm } from "@/components/register-form";
export default function RegisterPage() {
  return (
    <div className=" bg-[var(--secondary)] flex h-[100vh] w-full items-center justify-center p-6 md:p-10">
      <RegisterForm />
    </div>
  );
}

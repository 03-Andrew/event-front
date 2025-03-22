"use client";

import * as React from "react";
import { User as UserIcon } from "lucide-react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AccountDropdownProps {
  loggedIn: boolean;
}

export default function AccountDropdown({ loggedIn }: AccountDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <UserIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle account menu</span>
        </Button>
      </DropdownMenuTrigger>
      {loggedIn ? (
        <DropdownMenuContent
          align="end"
          className="border border-[var(--border)] cursor-pointer"
        >
          <DropdownMenuItem className="cursor-pointer">
            Account
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent
          align="end"
          className="border border-[var(--border)] cursor-pointer"
        >
          <DropdownMenuItem className="cursor-pointer">
            <Link href="/auth/login" className="w-full">
              Login
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href="/auth/register" className="w-full">
              Sign Up
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}

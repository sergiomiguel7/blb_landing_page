import Image from "next/image";
import React from "react";
import LogoImage from "../../../assets/logo.png";
import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href={"/"}>
      <Image
        className={className}
        src={LogoImage}
        width={120}
        height={50}
        alt="Logo"
      />
    </Link>
  );
}

"use client";
import React, { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Modal from "..";

export default function Reservation() {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const isOpen = useMemo(() => {
    return !!searchParams.get("reservation");
  }, [searchParams]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        push("/", { scroll: false });
      }}
    >
      <iframe
        src="https://buk.pt/blb-lavagem-ecologica"
        title="Reservation Page"
        className="w-[90vw] h-[70dvh]"
      />
    </Modal>
  );
}

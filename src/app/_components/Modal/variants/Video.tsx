"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Modal from "..";

export default function Video() {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const isOpen = useMemo(() => {
    return !!searchParams.get("video");
  }, [searchParams]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        push("/", { scroll: false });
      }}
    >
      <video className="rounded-lg w-full max-w-2xl" controls autoPlay={true}>
        <source src={"/videos/hero_video.mp4"} type="video/mp4" />
      </video>
    </Modal>
  );
}

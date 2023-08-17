import React from "react";
import { twMerge } from "tailwind-merge";

interface GridLayoutProps {
  children: React.ReactNode;
  className?: string;
  anchor?: string;
}

function GridLayout(props: GridLayoutProps) {
  return (
    <div
      className={twMerge(
        "grid w-full layout-width gap-4 mx-auto grid-cols-desktop bg-white mobile:grid-cols-mobile tablet:grid-cols-tablet ",
        props.className ?? ""
      )}
    >
      {props.children}
    </div>
  );
}

export default GridLayout;

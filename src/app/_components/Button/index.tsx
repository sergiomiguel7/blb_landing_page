"use client";
import { cn } from "@/lib/utils";
import { sendGTMEvent } from "@next/third-parties/google";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  event?: Object;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      onClick={(e) => {
        props.onClick && props.onClick(e);
        if (!!props.event && props.event !== undefined) {
          sendGTMEvent(props.event);
        }
      }}
      className={cn(
        "border-[1px] border-gray-300 border-solid rounded hover:bg-gray-100 cursor-pointer p-2 flex items-center justify-center",
        props.className
      )}
    >
      {props.children}
    </button>
  );
};

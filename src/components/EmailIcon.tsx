import type { SVGProps } from "react";

export function Emailcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.3rem"
      height="2.3rem"
      viewBox="0 0 48 48"
      {...props}
    >
      <g
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <path d="M44 24V9H4v30h20m20-5H30m9-5l5 5l-5 5"></path>
        <path d="m4 9l20 15L44 9"></path>
      </g>
    </svg>
  );
}

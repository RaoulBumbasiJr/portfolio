import * as React from "react";

function Tag(props) {
  return (
    <svg
      width={32}
      height={19}
      viewBox="0 0 32 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.727 8.206L22.248.566C21.898.253 21.213 0 20.71 0H2.891C1.88 0 0 .777 0 1.64v15.47c0 .863 1.88 1.64 2.89 1.64h17.82c.503 0 1.189-.253 1.536-.566l8.481-7.659a1.547 1.547 0 000-2.319zM17.504 9.375c0-1.725 1.75-3.125 3.906-3.125 2.157 0 3.907 1.4 3.907 3.125S23.567 12.5 21.41 12.5c-2.156 0-3.906-1.4-3.906-3.125z"
        fill="#b8b8b8"
      />
    </svg>
  );
}

export default Tag;

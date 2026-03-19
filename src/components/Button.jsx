// import { styled } from "styled-components";

// const Button = styled.button`
//   padding: 1rem 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 0.25rem;
//   color: #1f2937;
//   background-color: #f0920e;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #f0920e;
//   }
// `;

// export default Button;

export default function Button({ children, className, ...props }) {
  return (
    <button
      className={
        "px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500 " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}

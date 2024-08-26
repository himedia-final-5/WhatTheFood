/** @type {function(React.SVGProps<SVGElement): React.JSX.Element} */
export default function PaginationRight(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 9 4-4-4-4"
      />
    </svg>
  );
}

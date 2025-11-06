import { Link } from "react-router-dom";

function GoBack({ top }) {
  return (
    <Link
      to="../"
      className={`absolute top-${top} opacity-50 hover:text-[var(--color-primary)] transition-colors duration-200 ease-in-out`}
    >
      Go back
    </Link>
  );
}

export default GoBack;

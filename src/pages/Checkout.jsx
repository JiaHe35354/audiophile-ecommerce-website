import { Link } from "react-router-dom";

import Form from "../components/checkout/Form";

function CheckoutPage() {
  return (
    <section className="pt-40 bg-[var(--bg-light)] relative">
      <div className="centered-container max-[639px]:pb-40 py-25 sm:py-40 lg:py-60">
        <Link
          to="../"
          className={`absolute top-50 sm:top-60 lg:top-70 opacity-50 hover:text-[var(--color-primary)] transition-colors duration-200 ease-in-out`}
        >
          Go back
        </Link>

        <Form />
      </div>
    </section>
  );
}

export default CheckoutPage;

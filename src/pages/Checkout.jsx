import Form from "../components/checkout/Form";
import GoBack from "../components/shared/GoBack";

function CheckoutPage() {
  return (
    <section className="pt-40 bg-[var(--bg-light)] relative">
      <div className="w-[80%] mx-auto py-60">
        <GoBack top="70" />
        <Form />
      </div>
    </section>
  );
}

export default CheckoutPage;

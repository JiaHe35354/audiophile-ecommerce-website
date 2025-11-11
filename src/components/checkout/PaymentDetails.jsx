import CashOnDeliveryIcon from "../../assets/checkout/icon-cash-on-delivery.svg";
import InputField from "./InputField";

function PaymentDetails({ formState, paymentMethod, onPaymentChange }) {
  return (
    <>
      <p className="description">Payment details</p>
      <div className="sm:flex gap-8 mb-12">
        <label
          htmlFor="payment-method"
          className="w-full text-[1.2rem] font-bold -tracking-[0.21px] "
        >
          Payment Method
        </label>
        <div className="w-full flex flex-col gap-6 mt-6">
          <label htmlFor="e-money" className="radio-label ">
            <input
              className="radio-input"
              type="radio"
              id="e-money"
              name="payment-method"
              value="e-money"
              checked={paymentMethod === "e-money"}
              onChange={() => onPaymentChange("e-money")}
            />
            <span className="radio-text">e-Money</span>
          </label>

          <label htmlFor="cash" className="radio-label">
            <input
              className="radio-input"
              type="radio"
              id="cash"
              name="payment-method"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => onPaymentChange("cash")}
            />
            <span className="radio-text">Cash on Delivery</span>
          </label>
        </div>{" "}
      </div>

      {paymentMethod === "e-money" && (
        <div className="control-row">
          <div className="control">
            <InputField
              label="e-Money Number"
              name="e-money-number"
              placeholder="238521993"
              formState={formState}
            />
          </div>
          <div className="control">
            <InputField
              type="password"
              label="e-Money PIN"
              name="e-money-pin"
              placeholder="6891"
              formState={formState}
            />
          </div>
        </div>
      )}

      {paymentMethod === "cash" && (
        <div className="flex items-center gap-12">
          <img src={CashOnDeliveryIcon} alt="Cash on delivery icon" />
          <p className="text-[1.5rem] font-medium opacity-50">
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </>
  );
}

export default PaymentDetails;

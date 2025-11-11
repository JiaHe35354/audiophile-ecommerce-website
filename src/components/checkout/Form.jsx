import { useActionState, useContext, useEffect, useRef, useState } from "react";
import {
  eMoneyNumberRegex,
  isEmail,
  isNotEmpty,
  phoneRegex,
  pinRegex,
  zipRegex,
} from "../../util/validation";

import Cart from "../cart-modal/Cart";
import PaymentDetails from "../checkout/PaymentDetails";
import InputField from "./InputField";
import SuccessModal from "../success-modal/SuccessModal";
import { DataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import SummaryCart from "./SummaryCart";

function checkoutAction(prevFormState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phoneNumber = formData.get("phone-number");
  const address = formData.get("address");
  const zipCode = formData.get("zip-code");
  const city = formData.get("city");
  const country = formData.get("country");
  const paymentMethod = formData.get("payment-method");
  const eMoneyNumber = formData.get("e-money-number");
  const eMoneyPin = formData.get("e-money-pin");

  let errors = {};

  if (!isNotEmpty(name)) errors.name = "This field is required.";
  if (!isNotEmpty(address)) errors.address = "This field is required.";
  if (!isNotEmpty(city)) errors.city = "This field is required.";
  if (!isNotEmpty(country)) errors.country = "This field is required.";
  if (!isEmail(email)) errors.email = "Invalid email.";
  if (!phoneRegex.test(phoneNumber))
    errors.phoneNumber = "Invalid phone number.";
  if (!zipRegex.test(zipCode)) errors.zipCode = "Invalid ZIP code.";

  if (paymentMethod === "e-money") {
    if (!eMoneyNumberRegex.test(eMoneyNumber))
      errors.eMoneyNumber = "Invalid e-Money number.";

    if (!pinRegex.test(eMoneyPin))
      errors.eMoneyPin = "PIN must be exactly 4 digits.";
  }

  const hasError = Object.keys(errors).length > 0;

  return {
    errors,
    enteredValues: {
      name,
      email,
      phoneNumber,
      address,
      zipCode,
      city,
      country,
      paymentMethod,
      eMoneyNumber,
      eMoneyPin,
    },
    submitted: !hasError,
  };
}

function Form() {
  const [formState, formAction] = useActionState(checkoutAction, {
    errors: {},
    enteredValues: {},
  });
  const modal = useRef();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("e-money");

  const { cartItems } = useContext(DataContext);

  useEffect(() => {
    if (formState.submitted && Object.keys(formState.errors).length === 0) {
      modal.current.open();
      localStorage.removeItem("cartItems");
      localStorage.setItem("orderCompleted", "true");
    }
  }, [formState]);

  useEffect(() => {
    const isCompleted = localStorage.getItem("orderCompleted");
    if (isCompleted && cartItems.length === 0) navigate("/");
  }, [navigate, cartItems]);

  return (
    <>
      <SuccessModal ref={modal} />
      <form
        action={formAction}
        noValidate
        className=" lg:grid grid-cols-[7fr_3fr] items-start gap-12 lg:gap-6 xl:gap-12"
      >
        <input type="hidden" name="payment-method" value={paymentMethod} />

        <div className="bg-white p-10 lg:p-20 max-[1024px]:mb-12 rounded-2xl">
          <h1 className="uppercase text-[2.8rem] sm:text-[3.2rem] font-bold tracking-[1.14px] mb-16 sm:mb-18">
            checkout
          </h1>
          <p className="description">Billing details</p>

          <div className="control-group">
            <div className="control-row">
              <div className="control">
                <InputField
                  label="Name"
                  name="name"
                  placeholder="Alexei Ward"
                  formState={formState}
                />
              </div>
              <div className="control">
                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="alexei@mail.com"
                  formState={formState}
                />
              </div>
            </div>

            <div className="control-half">
              <InputField
                label="Phone Number"
                name="phone-number"
                type="tel"
                placeholder="+1 202-555-0136"
                formState={formState}
              />
            </div>
          </div>

          <p className="description">Shipping info</p>
          <div className="control-group">
            <div className="control">
              <InputField
                label="Your Address"
                name="address"
                placeholder="1137 Williams Avenue"
                formState={formState}
              />
            </div>
            <div className="control-row">
              <div className="control">
                <InputField
                  label="ZIP Code"
                  name="zip-code"
                  placeholder="100001"
                  formState={formState}
                />
              </div>
              <div className="control">
                <InputField
                  label="City"
                  name="city"
                  placeholder="New York"
                  formState={formState}
                />
              </div>
            </div>

            <div className="control-half">
              <InputField
                label="Country"
                name="country"
                placeholder="United States"
                formState={formState}
              />
            </div>
          </div>

          <PaymentDetails
            formState={formState}
            paymentMethod={paymentMethod}
            onPaymentChange={setPaymentMethod}
          />
        </div>

        <div className="bg-white p-[2.8rem] rounded-2xl flex flex-col">
          <h2 className="uppercase text-[1.8rem] font-bold tracking-wider mb-[3rem]">
            summary
          </h2>
          <SummaryCart />

          <button className="btn btn-primary">
            {paymentMethod === "e-money" ? "continue & pay" : " continue"}
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;

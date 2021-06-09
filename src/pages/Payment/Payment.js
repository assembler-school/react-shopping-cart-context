import React, { useContext, useState } from "react";
import { Formik } from "formik";
import { NavLink, Redirect } from "react-router-dom";

import Checkout from "../../hoc/withCheckout";
import paymentSchema from "./payment-schema";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ShoppingContext from "../../context";
import "./paymentStyles.scss";

function Payment() {
  const { updatePayment } = useContext(ShoppingContext);
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to="/Checkout/order-summary" />;
  }
  const [state, setClass] = useState(false);
  let card = "card";
  let cardNum = "cardNum";
  let cardName = "cardName";
  let cardDate = "cardDate";
  let cardCvv = "cardCvvFront";
  let payMethod = "paymethod";
  if (state === true) {
    payMethod = "cardBackHide";
    card = "cardBack";
    cardNum = "cardBackHide";
    cardName = "cardBackHide";
    cardDate = "cardBackHide";
    cardCvv = "cardCvv";
  }

  return (
    <>
      <h1>Payment</h1>
      <Formik
        initialValues={{
          paymentMethod: "",
          cardholderName: "Holder name",
          cardNumber: "XXXX XXXX XXXX XXXX",
          cardExpiryDate: "../..",
          cvvCode: "",
        }}
        initialErrors={{ defaultIsValid: "false" }}
        validationSchema={paymentSchema}
        onSubmit={(values) => {
          updatePayment(values);
          setRedirect(true);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          values,
          touched,
          isValidating,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <div id="my-radio-group">Choose the payment method</div>

            <div
              className="radioButtons"
              role="group"
              aria-labelledby="my-radio-group"
            >
              <Input
                type="radio"
                name="paymentMethod"
                label={<div className="creditCard">.</div>}
                id="creditCard"
                value="creditCard"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.paymentMethod}
                errorMessage={errors.paymentMethod}
              />
              <Input
                type="radio"
                name="paymentMethod"
                label={<div className="payPal">.</div>}
                id="payPal"
                value="payPal"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.paymentMethod}
                errorMessage={errors.paymentMethod}
              />
              <Input
                type="radio"
                name="paymentMethod"
                label={<div className="applePay">.</div>}
                id="applePay"
                value="applePay"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.paymentMethod}
                errorMessage={errors.paymentMethod}
              />
            </div>
            <section className="cardSection">
              <div className="input">
                <Input
                  onFocus={(event) => {
                    if (event.target.value === "XXXX XXXX XXXX XXXX") {
                      // eslint-disable-next-line no-param-reassign
                      event.target.value = "";
                      setClass(false);
                    }
                  }}
                  type="text"
                  label="Write the credit card number"
                  id="cardNumber"
                  value={values.cardNumber}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  placeholder="XXXX XXXX XXXX XXXX"
                  hasErrorMessage={touched.cardNumber}
                  errorMessage={errors.cardNumber}
                />
                <Input
                  onFocus={(event) => {
                    if (event.target.value === "Holder name") {
                      // eslint-disable-next-line no-param-reassign
                      event.target.value = "";
                      setClass(false);
                    }
                  }}
                  type="text"
                  label="Write the cardholder name"
                  id="cardholderName"
                  value={values.cardholderName}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  placeholder="Write the cardholder name"
                  hasErrorMessage={touched.cardholderName}
                  errorMessage={errors.cardholderName}
                />
                <div className="shortImputs">
                  <Input
                    onFocus={(event) => {
                      if (event.target.value === "../..") {
                        // eslint-disable-next-line no-param-reassign
                        event.target.value = "";
                        setClass(false);
                      }
                    }}
                    type="text"
                    label="Card expiry date"
                    id="cardExpiryDate"
                    value={values.cardExpiryDate}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder="MM/YY "
                    hasErrorMessage={touched.cardExpiryDate}
                    errorMessage={errors.cardExpiryDate}
                  />
                  <Input
                    onFocus={(event) => {
                      setClass(true);
                      if (event.target.value === "") {
                        console.log(event.target);
                        // eslint-disable-next-line no-param-reassign
                        event.target.placeholder = "";
                      }
                    }}
                    type="text"
                    label="CVV Code"
                    id="cvvCode"
                    value={values.cvvCode}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder="XYZ"
                    hasErrorMessage={touched.cvvCode}
                    errorMessage={errors.cvvCode}
                  />
                </div>
              </div>
              <div className="wrappedCard">
                <div className={card}>
                  <div className={payMethod}>.</div>
                  <p className={cardNum}>{values.cardNumber}</p>,
                  <p className={cardName}>{values.cardholderName}</p>
                  <p className={cardDate}>{values.cardExpiryDate}</p>
                  <p className={cardCvv}>{values.cvvCode}</p>
                </div>
              </div>
            </section>
            <NavLink to="/Checkout/step-2">
              <Button>Previous</Button>
            </NavLink>

            <Button submitButton disabled={isValidating || !isValid}>
              Buy now
            </Button>
            <div>
              <code>{`errors: ${JSON.stringify(
                errors,
              )} | isValid: ${isValid}`}</code>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Checkout(Payment);

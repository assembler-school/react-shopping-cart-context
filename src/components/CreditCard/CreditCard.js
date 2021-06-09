/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import cn from "clsx";

import visaImage from "../../img/icons/payment/Visa_Inc.-Logo.wine.svg";

import "./CreditCard.scss";

function CreditCard({
  carholderName,
  cardNumber,
  cardCvv,
  cardExpiry,
  flip,
  cardType,
}) {
  const classes = cn({
    card: true,
    flipState: flip,
  });

  return (
    <>
      <div className="col-6">
        <div className={classes}>
          <div className="flip">
            <div className="front">
              <div className="strip-bottom" />
              <div className="strip-top" />
              <div className="chip">
                <div className="chip-line" />
                <div className="chip-line" />
                <div className="chip-line" />
                <div className="chip-line" />
                <div className="chip-main" />
              </div>
              <svg
                className="wave"
                viewBox="0 3.71 26.959 38.787"
                width="26.959"
                height="38.787"
                fill="white"
              >
                <path d="M19.709 3.719c.266.043.5.187.656.406 4.125 5.207 6.594 11.781 6.594 18.938 0 7.156-2.469 13.73-6.594 18.937-.195.336-.57.531-.957.492a.9946.9946 0 0 1-.851-.66c-.129-.367-.035-.777.246-1.051 3.855-4.867 6.156-11.023 6.156-17.718 0-6.696-2.301-12.852-6.156-17.719-.262-.317-.301-.762-.102-1.121.204-.36.602-.559 1.008-.504z" />
                <path d="M13.74 7.563c.231.039.442.164.594.343 3.508 4.059 5.625 9.371 5.625 15.157 0 5.785-2.113 11.097-5.625 15.156-.363.422-1 .472-1.422.109-.422-.363-.472-1-.109-1.422 3.211-3.711 5.156-8.551 5.156-13.843 0-5.293-1.949-10.133-5.156-13.844-.27-.309-.324-.75-.141-1.114.188-.367.578-.582.985-.542h.093z" />
                <path d="M7.584 11.438c.227.031.438.144.594.312 2.953 2.863 4.781 6.875 4.781 11.313 0 4.433-1.828 8.449-4.781 11.312-.398.387-1.035.383-1.422-.016-.387-.398-.383-1.035.016-1.421 2.582-2.504 4.187-5.993 4.187-9.875 0-3.883-1.605-7.372-4.187-9.875-.321-.282-.426-.739-.266-1.133.164-.395.559-.641.984-.617h.094zM1.178 15.531c.121.02.238.063.344.125 2.633 1.414 4.437 4.215 4.437 7.407 0 3.195-1.797 5.996-4.437 7.406-.492.258-1.102.07-1.36-.422-.257-.492-.07-1.102.422-1.359 2.012-1.075 3.375-3.176 3.375-5.625 0-2.446-1.371-4.551-3.375-5.625-.441-.204-.676-.692-.551-1.165.122-.468.567-.785 1.051-.742h.094z" />
              </svg>
              <div className="card-number">
                <div className="section">{cardNumber || "CARD NUMBER"}</div>
              </div>
              <div className="end">
                <span className="end-text">exp. end:</span>
                <span className="end-date"> {cardExpiry || "12/12"}</span>
              </div>
              <div className="card-holder">
                {carholderName || "mr Mathias Fortuna"}
              </div>
              {cardType === "mastercard" && (
                <div className="master">
                  <div className="circle master-red" />
                  <div className="circle master-yellow" />
                </div>
              )}
              {cardType === "visa" && (
                <div className="visa">
                  <img className="" src={visaImage} alt="visa" />
                </div>
              )}
            </div>
            <div className="back">
              <div className="strip-black" />
              <div className="ccv">
                <label>cvv</label>
                <div>{cardCvv}</div>
              </div>
              <div className="terms">
                <p>
                  This card is property of Assembler Bank, Wonderland. Misuse is
                  criminal offence. If found, please return to Assembler Bank or
                  to the nearest bank with MasterCard logo.
                </p>
                <p>Use of this card is subject to the credit card agreement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreditCard;

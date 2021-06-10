import React, { createContext, useReducer } from "react";

export const orderContext = createContext({
  stepOne: {
    completed: false,
    name: "",
    email: "",
    countryCode: "",
    phone: "",
  },
  stepTwo: {
    completed: false,
    address: "",
    city: "",
    zip: "",
    country: "",
  },
  stepThree: {
    completed: false,
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    acceptedTerms: false,
  },
});

export const checkInitialState = {
  stepOne: {
    completed: false,
    name: "",
    email: "",
    countryCode: "",
    phone: "",
  },
  stepTwo: {
    completed: false,
    address: "",
    city: "",
    zip: "",
    country: "",
  },
  stepThree: {
    completed: false,
    payMethod: "",
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    acceptedTerms: false,
  },
};

const SUBMITONE = "SUBMITONE";
const SUBMITTWO = "SUBMITTWO";
const SUBMITTHREE = "SUBMITTHREE";

export function checkoutReducer(state, action) {
  switch (action.type) {
    case SUBMITONE: {
      return {
        ...state,
        stepOne: {
          ...action.payload,
          completed: true,
        },
      };
    }
    case SUBMITTWO: {
      return {
        ...state,
        stepTwo: {
          ...action.payload,
          completed: true,
        },
      };
    }
    case SUBMITTHREE: {
      return {
        ...state,
        stepTwo: {
          ...action.payload,
          completed: true,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export function CheckoutContext({ children }) {
  const [checkState, dispatch] = useReducer(checkoutReducer, checkInitialState);

  function submitStepOne(formOne) {
    dispatch({
      type: SUBMITONE,
      payload: formOne,
    });
  }

  function submitStepTwo(formTwo) {
    dispatch({
      type: SUBMITTWO,
      payload: formTwo,
    });
  }

  function submitStepThree(formThree) {
    dispatch({
      type: SUBMITTHREE,
      payload: formThree,
    });
  }

  return (
    <orderContext.Provider
      value={{
        stepOne: checkState.stepOne,
        stepTwo: {
          completed: false,
          address: "",
          city: "",
          zip: "",
          country: "",
        },
        stepThree: {
          completed: false,
          payMethod: "",
          cardHolder: "",
          cardNumber: "",
          expiryDate: "",
          cvv: "",
          acceptedTerms: false,
        },
        submitStepOne: submitStepOne,
        submitStepTwo: submitStepTwo,
        submitStepThree: submitStepThree,
      }}
    >
      {children}
    </orderContext.Provider>
  );
}

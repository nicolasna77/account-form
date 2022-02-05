import * as yup from "yup";
import { createContext, useCallback, useState } from "react";

const AddEntryContext = createContext({});

const validationSchema = yup.object().shape({
  value: yup.number().required().label("value"),
  message: yup.string().required().label("message"),
});

const initialValues = {
  entries: [
    { value: "30", message: "finezunfrnez" },
    { value: "30", message: "finezunfrnez" },
  ],
};

function savedInitialValue(entries) {
  dispatch({
    type: "saved_InitialValue",
    payload: entries,
  });
}

export const AddEntryProvider = (props) => {
  const [state, setState] = useState(initialValues);

  return (
    <AddEntryContext.Provider
      value={{
        entries: state.entries,
        handleFormSubmit,

        savedInitialValue,
      }}
    ></AddEntryContext.Provider>
  );
};

export default AddEntryContext;

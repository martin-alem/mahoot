import React from "react";

function useFormState(initialValue) {
  const [state, setState] = React.useState(initialValue);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return [state, handleChange, setState];
}

export default useFormState;

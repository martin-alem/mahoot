import React from "react";

function useUserState(initialValue) {
  const [state, setState] = React.useState(initialValue);

  return [state, setState];
}

export default useUserState;

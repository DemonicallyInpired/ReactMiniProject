import React from "react";
const Counter = ({ handleFunc, variant }) => {
  return (
    <button type="button" onClick={handleFunc}>
      {variant}
    </button>
  );
};
export default React.memo(Counter);

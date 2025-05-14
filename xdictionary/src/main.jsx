import { createRoot } from "react-dom/client";
import App from "./App";
if (Object.is(document.querySelector("#root"), null)) {
  throw new Error(
    `invalid reference to the DOM node to be used for mounting the vDOM, please make sure the given node exist`
  );
}
const root = createRoot(document.querySelector("#root"));

root.render(<App />);

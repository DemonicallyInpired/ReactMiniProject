import { createRoot } from "react-dom/client";
import App from "./App";
if (Object.is(document.querySelector("#root"), null)) {
  throw new Error(
    `invalid reference to the DOM node with id root, please make sure such node exist to faciliate client side rendering`,
  );
}
const root = createRoot(document.querySelector("#root"));
root.render(<App />);

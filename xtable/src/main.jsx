import { createRoot } from "react-dom/client";
import App from "./App.jsx";

if (Object.is(document.querySelector("#root"), null)) {
  throw new Error(
    `invalid reference to the dom node please make sure the DOM Node with an id of root exist to facilitate CSR`,
  );
}
const root = createRoot(document.querySelector("#root"));
root.render(<App />);

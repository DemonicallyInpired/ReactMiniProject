import { createRoot } from "react-dom/client";
import App from "./App";
const root = createRoot(document.getElementById("root"));
if (Object.is(root, null)) {
  throw new Error(
    `invalid reference to the DOM Node used for mounting the virtual DOM root, please ensure that a DOM element with the id root exist`
  );
}
root.render(<App />);

import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const rootElement = document.querySelector("#root");

if (Object.is(rootElement, null)) {
  throw new Error(
    `invalid DOM Node reference please make sure that the node with the id root exist to mount the virtual DOM root`,
  );
}
const root = createRoot(rootElement);
root.render(<App />);

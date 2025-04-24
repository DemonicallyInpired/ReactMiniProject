import { createRoot } from "react-dom/client";
import App from "./App.jsx";
const rootElement = document.querySelector("#root");
if (Object.is(rootElement, null)) {
  throw new Error(
    `the DOM Node with an id of root should exist to mount a virtual DOM`
  );
}
const root = createRoot(rootElement);
root.render(<App />);

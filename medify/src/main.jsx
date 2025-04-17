import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./global.css";

const rootElement = document.querySelector("#root");
if (Object.is(rootElement, null)) {
  throw new Error(
    "please make sure that the reference to the dom node with the id root exist to mount the virtual dom",
  );
}
const root = createRoot(rootElement);
root.render(<App />);

import App from "./App.jsx";
import { createRoot } from "react-dom/client";
const rootElement = document.querySelector("#root");
if (Object.is(rootElement, null)) {
  throw new Error(
    "invalid reference to the dom Node to mount the virtual DOM root"
  );
}
const vdomRoot = createRoot(rootElement);
vdomRoot.render(<App />);

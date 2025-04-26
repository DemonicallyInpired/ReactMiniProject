import { createRoot } from "react-dom/client";
import App from "./App";
const rootElement = document.getElementById("root");
if (Object.is(rootElement, null)) {
  throw new Error(
    "invalid reference to the DOM Node with the id root required to mount vdom"
  );
}
const root = createRoot(rootElement);

root.render(<App />);

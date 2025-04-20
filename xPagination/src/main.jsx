import { createRoot } from "react-dom/client";
import App from "./App.jsx";
const root = document.querySelector("#root");

if (Object.is(root, null)) {
  throw new Error(
    `invalid reference to the DOM Node with the id root please make sure it exist to faciliate rendering via vritual dom`
  );
}

const virtualDOMroot = createRoot(root);

virtualDOMroot.render(<App />);

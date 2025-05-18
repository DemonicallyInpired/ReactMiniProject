import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = document.querySelector("#root");
if (Object.is(root, null)) {
  throw new Error(
    `invalid reference to the DOM Node to mount VDOM root to facilate CSR`,
  );
}
const vdomroot = createRoot(root);
vdomroot.render(<App />);

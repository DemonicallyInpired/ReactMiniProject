import { createRoot } from "react-dom/client";
import App from "./App.jsx";
const rootNode = document.querySelector("#root");
if (Object.is(rootNode, null)) {
  throw new Error(
    `invalid reference to the dom node with the id of root, please make sure it exist to mount the vDOM`
  );
}

const root = createRoot(rootNode);
root.render(<App />);

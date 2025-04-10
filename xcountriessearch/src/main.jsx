import { createRoot } from "react-dom/client";
import App from "./App";

const rootEle = document.querySelector("#root");
if (Object.is(rootEle, null)) {
  throw new Error(
    `invalid reference to the dom Node to mount the virtual DOM root, please make sure element with id root exist`,
  );
}
const root = createRoot(rootEle);
root.render(<App />);

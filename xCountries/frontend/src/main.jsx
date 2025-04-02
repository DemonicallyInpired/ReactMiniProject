import { createRoot } from "react-dom/client";
import App from "./App";
if (Object.is(document.querySelector("#root"), null)) {
  throw new Error(
    `invalid reference to the virutal DOM root no DOM Element with id #root present`
  );
}
const root = createRoot(document.querySelector("#root"));

root.render(<App />);

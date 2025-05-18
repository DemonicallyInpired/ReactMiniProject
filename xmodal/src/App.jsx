import ReactModal from "react-modal";
import UserModal from "./Components/Modal";
ReactModal.setAppElement("#root");
export default function App() {
  return (
    <div>
      <UserModal />
    </div>
  );
}

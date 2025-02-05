import { useContext } from "react";
import { UserDataContext } from "./context/UserDataContext";
import Form from "./components/Form";
import Ticket from "./components/Ticket";

function App() {
  const { confirm } = useContext(UserDataContext);

  return (
    <main className="flex flex-col justify-center items-center min-h-screen py-10 font-Inconsolata bg-neutral_900 bg-background_desktop bg-cover bg-no-repeat text-white">
      <img
        className="h-8 mb-12 sm:mb-8"
        src="assets/images/logo-full.svg"
        alt="logo"
      />
      {!confirm ? <Form /> : <Ticket />}
    </main>
  );
}

export default App;

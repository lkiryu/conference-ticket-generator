import { createContext, useState } from "react";

export const UserDataContext = createContext();

export default function UserDataProvider({ children }) {
  const [confirm, setConfirm] = useState(false);
  const [userData, setUserData] = useState({
    avatar: null,
    preview: "",
    fullName: "",
    email: "",
    githubUser: "",
    ticketNumber: Math.floor(Math.random() * 9999)
      .toString()
      .padStart(5, "0"),
  });

  return (
    <UserDataContext.Provider
      value={{
        userData,
        confirm,
        setUserData,
        setConfirm,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

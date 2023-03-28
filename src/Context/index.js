import { createContext, useState } from "react";

export const User_data = createContext(null);

export default function Context({ children }) {
  const [page, setPage] = useState(0);
  const [dpImage, setDpImage] = useState("OFF");
  return (
    <User_data.Provider
      value={{
        page,
        setPage,
        dpImage,
        setDpImage,
      }}
    >
      {children}
    </User_data.Provider>
  );
}

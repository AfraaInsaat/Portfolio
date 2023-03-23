import { createContext, useState } from "react";

export const User_data = createContext(null);

export default function Context({ children }) {
  const [page, setPage] = useState(0);
  return (
    <User_data.Provider
      value={{
        page,
        setPage,
      }}
    >
      {children}
    </User_data.Provider>
  );
}

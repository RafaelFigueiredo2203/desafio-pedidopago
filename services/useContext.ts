import { useContext } from "react";

import { AuthContext } from "../contexts/context";

export function useAuth(){
  const value = useContext(AuthContext);

  return value;
}
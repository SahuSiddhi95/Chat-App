import { Children, createContext } from "react";
import axios from 'axios'
export const AuthContext = createContext();
const backendUrl = import.meta.env.BACKEND_URL; 
axios.defaults.baseURL = backendUrl;


export const AuthProvider =({ Children })=>{
      const value={
              axios 
      }
      return(
        <AuthContext.Provider value={value}>
            {Children}
        </AuthContext.Provider >
      )
}
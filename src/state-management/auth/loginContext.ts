import React, { Dispatch } from "react";
import { authAction } from "./AuthProvider";


interface LoginContextType {
    user: string;
    dispatch: Dispatch<authAction>;
}

const LoginContext = React.createContext<LoginContextType>({} as LoginContextType)

export default LoginContext;
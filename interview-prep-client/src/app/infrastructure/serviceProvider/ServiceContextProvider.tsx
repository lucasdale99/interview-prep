import React, {ReactNode, createContext} from "react";
import {IServiceContext} from "./IServiceContext";
import { ServiceProvider } from "./ServiceProvider";

interface IServiceContextProviderProps {
    children: ReactNode
}

export const ServiceContext = createContext<IServiceContext>(
    ServiceProvider.getInstance().getServiceContext()
);

export const ServiceContextProvider = ({children}: IServiceContextProviderProps) => {
    return (
        <ServiceContext.Provider value={ServiceProvider.getInstance().getServiceContext()}>
            {children}
        </ServiceContext.Provider>
    )
}
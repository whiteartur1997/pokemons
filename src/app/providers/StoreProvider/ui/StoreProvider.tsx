import {Provider} from "react-redux";
import {createStore} from "../config/store";
import {FC, PropsWithChildren} from "react";

export const StoreProvider:FC<PropsWithChildren> = ({ children }) => {
    return(
        <Provider store={createStore()}>
            {children}
        </Provider>
    )
}
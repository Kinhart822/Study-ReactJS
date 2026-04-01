import { useReducer } from "react";
import Context from "./Context";
import reducer1, { initState1 } from "./reducer";
import logger1 from "./logger";

function Provider({ children }) {
    const [state, dispatch] = useReducer(logger1(reducer1), initState1);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
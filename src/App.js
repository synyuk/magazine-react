import React, {createContext, useContext, useState} from "react";
import {RouterProvider} from "react-router-dom";
import router from "./routes/routes";

const MyContext = createContext();

function App() {
    const [counter, setCounter] = useState(0);
    //const [card, setToCard] = useState([]);

    return (
        <React.StrictMode>
            {/*<MyContext.Provider value={{ counter, setCounter, card, setToCard }}>*/}
            <MyContext.Provider value={{ counter, setCounter }}>
                <RouterProvider router={router} basename="/magazine-react" />
            </MyContext.Provider>
        </React.StrictMode>
    );
}

export default App;

export function useMyContext() {
    return useContext(MyContext);
}
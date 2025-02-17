import Alert from "../components/Alert";
import { createContext, useState, useContext } from "react";
const AlertContext = createContext();
function AltProvider({ children }) {
    const [altData, setAltData] = useState({
      type: "",
      message: "",
    });

    return(
        <AlertContext.Provider value={{ altData, setAltData }}>
        <Alert />
        {children}
      </AlertContext.Provider>
    )

}
function useAltContext() {
    const context = useContext(AlertContext);
    return context;
  }

export {AltProvider, useAltContext}

import { useState } from "react"
import { TotalAppProvider } from "./SingleContext"


const ContextProvider = ({children}) => {

    const [install, setInstall] = useState([])

    const data={
        install,
        setInstall
    }
  return (
    <TotalAppProvider.Provider value={data}>{children}</TotalAppProvider.Provider>
  )
}

export default ContextProvider
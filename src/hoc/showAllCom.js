import { Component, useCallback, useState } from "react";

export const showAllCom = (Component) => {
    return (props) => {
        const [showCom, setShowCom] = useState(false)

        const openCom = useCallback(() => {
            setShowCom(true)
        }, [])


        return <Component {...{showCom, openCom}} {...props} />
    }
}
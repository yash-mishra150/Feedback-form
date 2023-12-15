import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({childen}) => {
    return <FeedbackContext.Provider>
        {children}
    </FeedbackContext.Provider>
}
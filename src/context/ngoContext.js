import React, {useState, createContext} from 'react';

export const ngoContext = createContext();

export const NgoProvider = (props) => {
    const [ngo, setNgo] = useState({});

    return (
        <ngoContext.Provider value={{ngo, setNgo}}>
            {props.children}
        </ngoContext.Provider>
    )
}

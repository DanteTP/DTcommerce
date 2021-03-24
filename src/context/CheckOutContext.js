import React, { createContext, useState} from 'react';

export const CheckOutContextp = createContext()



function CheckOutContext ({children}) {
    const [coproduct, setcoproduct] = useState([])

    const onAdd = (value1,value2)=>{

        setcoproduct({
            order_number:value1,
            orderdata:value2
        })
    }
    return (
        <div>
            <CheckOutContextp.Provider value={{coproduct,onAdd
            }}>
                {children}
            </CheckOutContextp.Provider>
        </div>
    )
}

export default CheckOutContext
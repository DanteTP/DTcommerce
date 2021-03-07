import React, { createContext,useContext, useState,useEffect} from 'react';
import {getFirestore} from '../firebase'

export const ProdContext = createContext()



function MProdContext({children}) {
        console.log('prdocontext');

    const [productos, setProductos] = useState([])
       useEffect(() => {
        const db = getFirestore()
        const products = db.collection('Productos')
        products.get().then((data)=>{
            let dato = data.docs.map(element=> element.data())
            setProductos(dato)
        })
       }, [])        
    return (
        <div>
            <ProdContext.Provider value={{productos}}>
                {children} 
            </ProdContext.Provider>
        </div>
    )
}

export default MProdContext
import React, { createContext,useContext, useState,useEffect} from 'react';
import {getFirestore} from '../firebase'

export const ProdContext = createContext()



function MProdContext({children}) {

    const [productos, setProductos] = useState([])
    const [indexprod, setindexprod] = useState([])
       useEffect(() => {
        const db = getFirestore()
        const products = db.collection('Productos')
        products.get().then((data)=>{
            let dato = data.docs.map(element=> element.data())
            setProductos(dato)
            let index = dato.filter(p=>p.status==='offer')
            setindexprod(index.sort((a,b)=>{return b.disscount-a.disscount}).splice(0,4))
        })
       }, [])        
       
    return (
        <div>
            <ProdContext.Provider value={{productos,indexprod}}>
                {children} 
            </ProdContext.Provider>
        </div>
    )
}

export default MProdContext
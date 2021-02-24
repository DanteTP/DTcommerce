import React, { createContext,useContext, useState} from 'react';

export const CartContextp = createContext()



function McartContext({children}) {

    const [product, setProduct] = useState([])
    
    let isinCart = (value)=>{
       return (product.findIndex(p=>p.item.id==value.id)<0?false:true)
    }

    let onAdd = (value,qty)=> {
        if(!isinCart(value)){
            setProduct([...product,{item:value,quantity:qty}])
        }else{
            let nprod = product.map(p=>{
                return (p.item.id==value.id? {item:p.item, quantity:p.quantity+qty}:p)
                })
            setProduct(nprod)
        }
    }

    const clear = () =>{
       return  (setProduct([]))
    }

    const removeItem = (value) =>{
        let ncart = product.filter( p => p.item.id !== value.id )  
        return (
            setProduct(ncart))
    }

    return (
        <div>
            <CartContextp.Provider value={{product,setProduct,onAdd,clear,removeItem
            }}>
                {children}
            </CartContextp.Provider>
        </div>
    )
}

export default McartContext
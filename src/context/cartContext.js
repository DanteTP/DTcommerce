import React, { createContext,useContext, useState} from 'react';

export const CartContextp = createContext()



function McartContext({children}) {
    console.log('cartcontext');
    let carrito = JSON.parse(localStorage.getItem('cart'))
    let initialcart = (value)=>{
        return (value? value :[])
    }
    const [product, setProduct] = useState(initialcart(carrito))
    
    let isinCart = (value)=>{
       return (product.findIndex(p=>p.item.id==value.id)<0?false:true)
    }

    let totalac = (value) =>{
            if(value.length>0){
                return (value.reduce((acc,cv)=>acc+cv.quantity,0))
            } else {return 0}
    }


    let onAdd = (value,qty)=> {
        if(!isinCart(value)){
            setProduct([...product,{item:value,quantity:qty,total:value.price*qty}])
        }else{
            let nprod = product.map(p=>{
                return (p.item.id==value.id? {item:p.item, quantity:p.quantity+qty, total:p.item.price*(p.quantity+qty)}:p)
                })
            setProduct(nprod)
        }
    }
    
    let onSus = (value) =>{
        let nprod = product.map(p=>{
            return (p.item.id==value.id? {item:p.item, quantity:p.quantity-1, total:p.item.price*(p.quantity-1)}:p)
            })
        setProduct(nprod)
    }

    let Gtotal = () =>{
       return product.reduce((acc,cv)=>acc+cv.total,0)
    }

    const clear = () =>{
       setProduct([])
       localStorage.clear();
    }

    const removeItem = (value) =>{
        let ncart = product.filter( p => p.item.id !== value.id )  
            setProduct(ncart)
    }
    
    const initialcontrol = ()=>{
    if(product.length>0){
       return localStorage.setItem('cart',JSON.stringify(product))}else{return ""}}
    
    initialcontrol()

    return (
        <div>
            <CartContextp.Provider value={{product,setProduct,onAdd,clear,removeItem,totalac,Gtotal,onSus
            }}>
                {children}
            </CartContextp.Provider>
        </div>
    )
}

export default McartContext
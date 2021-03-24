import './style.css'
import React, { useState, useEffect } from 'react'
import Order from '../../components/Order'
import {useContext} from 'react'
import {CheckOutContextp} from '../../context/CheckOutContext'
import CircularProgress from '@material-ui/core/CircularProgress';

const CheckOutContainer = () =>{
    const [loading, setloading] = useState(true)
    const {coproduct}  = useContext(CheckOutContextp)

    useEffect(() => {
        const data = new Promise((resolve,reject)=>{
            if(coproduct.length===0){
                setloading(true)
            }else{
            resolve(coproduct)}
        })
        data.then(result=>{
            setloading(false)
        })
        return () => {
            if(coproduct.lentgh===0){setloading(true)}
        }
        }, [coproduct])
    
        if(loading) {
            return(
              <CircularProgress/>)}else {
    return (
        <div className='container'>
            <Order/>
       </div>
    )}

}

export default CheckOutContainer
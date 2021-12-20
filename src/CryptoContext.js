import React, { useContext, useState, createContext, useEffect } from 'react'

export const CryptoContext = createContext()

const apiKey= '1ab2df8737a4bad216d26ab4fb9582c0e9ad899396e00fbc75244623ef1c0849';
const url = `https://min-api.cryptocompare.com/data/v2/histohour?fsym=BTC&tsym=USD&limit=10&api_key=${apiKey}`;


const fetchData = async (dataUrl) => {
  const response = await fetch(dataUrl)
   return await response.json()
//   const cryptoData= data.Data.Data;
//   console.log(cryptoData)
}

// console.log(cryptoData)
export function CryptoProvider({ children }){
    const [data, setData] = useState(0)
    useEffect(()=>{
        fetchData(url).then(res => {
            // console.log(typeof res.Data)
            setData(res.Data.Data)
            
        })
    }, [])
//    console.log(Object.keys(data))
    
    return (
        <CryptoContext.Provider value={data}>
            {children}
        </CryptoContext.Provider>
    )
}
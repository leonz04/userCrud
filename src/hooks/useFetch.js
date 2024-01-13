import { useState } from "react"
import axios from "axios"


const useFetch = (baseUrl) => {

    const [response, setResponse] = useState()

    //READ
    const getApi=()=>{
        const url=`${baseUrl }/users/`
        axios.get(url)
        .then((result) => {
            setResponse(result.data)
            
        }).catch((err) => {
            console.log(err)
        });
    }

    //CREATE
    const createApi=(data)=>{
        const url=`${baseUrl }/users/`
        axios.post(url, data)
        .then((result) => {
            console.log(result)
            setResponse([...response,result.data])
            
        }).catch((err) => {
            console.log(err)
        });

    }

    //DELETE
    const deleteApi=(id)=>{
        const url=`${baseUrl }/users/${id}/`
        axios.delete(url,id)
        .then((result) => {
            console.log(result)
            setResponse(response.filter(user=>user.id!==id))
        }).catch((err) => {
            console.log(err)
            
        });
    }

    //UPDATE
    const updateApi=(id,data)=>{
        const url=`${baseUrl }/users/${id}/`
        axios.put(url, data)
        .then((result) => {
            console.log(result.data)
            setResponse(response.map(user=>user.id===id? result.data : user))
            
        }).catch((err) => {
            console.log(err)
            
        });
    }

    return[response, getApi, createApi,deleteApi, updateApi]


}

export default useFetch
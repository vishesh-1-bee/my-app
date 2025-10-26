"use client";
import React, { useEffect, useState } from 'react'


const url = 'https://jsonplaceholder.typicode.com/posts';

const page = () => {
    const [todo, settodos] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data);
            settodos(data)
            return data;
        }
        fetchdata()
    }, [])
    return (
        <div>
            <button className="p-8 rounded-2xl bg-yellow-200 ml-4 text-black" onClick={() => alert("we are here ")}>clik me</button>
            <div className='grid grid-cols-3 gap-6'>
                {todo.map((item, index) => {
                 return <p key={index}> {item.body}</p>
                })}
            </div>
        </div>
    )
}

export default page

import React from 'react'

const page = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const data = await fetch(url)
  const response = await data.json()


  return (
    <div>
      <h1>wea re in the server compo</h1>

      {response.map((item, index) => {

         return <p key={index}>{item.body}</p>
      })}

    </div>
  )
}

export default page

import React from 'react'

const page = async (props) => {
    const data = await props.params;
    console.log(data);
    
  return (
    <div>
      <h1>we are in nexted dynaimic</h1>
      <h2>the data is - {data.username} : {data.postid}</h2>
    </div>
  )
}

export default page
//this we acn only do in server component

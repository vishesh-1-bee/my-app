import React from 'react'

const products = async(props) => {

    const data = await props.searchParams
    console.log(data);
    
  return (
    <div>
      <h1>we are in product sections</h1>
    </div>
  )
}

export default products

import React from 'react'

const dynamicpage =async (props) => {

  const username = await props.params;
  console.log(username);
  
  return (
    <div>
      <h1>
       the namre is - {username.username}
      </h1>
    </div>
  )
}

export default dynamicpage

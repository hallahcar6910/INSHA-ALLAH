import React from 'react';

export default function Parentprops(props) {
  return (
    <div>
{props.data.map
(list=><li>{list.name}</li>)}

    </div>
  )
}

import React from 'react';
import { UserContext } from './App';

export const ComponentF = () => {
  return (
    <div>
<UserContext.Consumer>
{

    username =>{
        return<div>user context value {username}</div>
    }
}


</UserContext.Consumer>

    </div>
  )
}

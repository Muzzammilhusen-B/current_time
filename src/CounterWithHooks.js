import React, { useEffect, useState} from 'react';


const CounterWithHooks =()=>{

const[count, setCount]= useState(0);

useEffect(()=>{
 document.title=`You clicked ${count} times`;
},[count]
)


return(
<div>
    
    
    <button onClick={()=>setCount(count+1)}><i className="plus icon green"/></button>
    <p>You clicked {count} times</p>
    <button onClick={()=>setCount(count-1)}><i className="minus icon red"/></button>
</div>
);
};

export default CounterWithHooks;    
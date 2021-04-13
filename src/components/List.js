import React from 'react'

const List = ({children}) => {
    return (
        <ul>
            {children}  
        </ul>
    )
}


const ListItem = (props, {children}) =>{
    return (
        <>
        <li {...props}>
           {children} 
        </li>
        </>
    )
}

const ListHeader = () => {
    return(
        <h1>
        </h1>
    )
}


export {List, ListItem, ListHeader}

import React from 'react'
const TodoItem =(props)=> {
   const {items} = props;
   const ListItems = items.map(item =>{
       return (
         <div key={item.id}>
           <span>{item.name}</span>
           <span>{item.age}</span>
           <span>{item.location}</span>
           <span>{item.Socialstatus}</span>
           <span>{item.University}</span>
         </div>
        )
  })
    return (
       <div>
          {ListItems}
       </div>  
    )
}

export default TodoItem; 
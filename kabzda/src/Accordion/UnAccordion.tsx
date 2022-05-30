import React from 'react';

export  type itemType = {
    title:string
    value:any

}

type propsUnAccordionType = {
    items:itemType[]
    onClick:(value:any)=>void
}
export const UnAccordion =(props:propsUnAccordionType)=>{
    return (
        <div>
            {props.items.map((el,index)=> {
                return <ul key={index} onClick={()=>{props.onClick(el.value)}}>{el.title}</ul>
            })}
        </div>
    );
}
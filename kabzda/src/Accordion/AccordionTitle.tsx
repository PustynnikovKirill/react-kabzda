import React from 'react';
type AccordionTitleType = {
    titleValue: string
    onclickStar:()=>void
}
export const AccordionTitle =(props:AccordionTitleType)=>{
    return (
        <h3 onClick={()=>{props.onclickStar()}}>---{props.titleValue}---</h3>

    );
}
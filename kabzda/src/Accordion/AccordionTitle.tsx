import React from 'react';

type AccordionTitleType = {
    titleValue: string
}
export const AccordionTitle =(props:AccordionTitleType)=>{
    return (
        <h3>---{props.titleValue}---</h3>

    );
}
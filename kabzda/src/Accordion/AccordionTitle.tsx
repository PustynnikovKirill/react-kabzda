import React from 'react';
import style from 'AccordionTitle.module.css'
type AccordionTitleType = {
    titleValue: string
}
export const AccordionTitle =(props:AccordionTitleType)=>{
    return (
        <h3>---{props.titleValue}---</h3>

    );
}
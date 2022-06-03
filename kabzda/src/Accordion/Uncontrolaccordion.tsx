import React, {useState} from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {itemType, UnAccordion} from "./UnAccordion";



type propsAccordionType = {
    titleValue:string
    collapsed:boolean
    setStar:(collapsed:boolean)=>void
    items:itemType[]
    onClick:(value:any)=>void
}

export const Uncontrolaccordion=(props:propsAccordionType)=>{

    const onclickStar =()=> {
        props.setStar(!props.collapsed)
    }
    return (
        <div>
           <AccordionTitle titleValue={props.titleValue} onclickStar={onclickStar}/>
            {!props.collapsed && <UnAccordion items={props.items} onClick={props.onClick}/>}
        </div>

    );
}
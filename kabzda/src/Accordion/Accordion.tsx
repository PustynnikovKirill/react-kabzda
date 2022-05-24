import React, {useState} from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {Star} from "./Star";




type propsAccordionType = {
    titleValue:string
    collapsed?:boolean
}
export const Uncontrolaccordion=(props:propsAccordionType)=>{
    let [star,setStar]=useState(false)
    const onclickStar =()=> {
        setStar(!star )

    }
    return (
        <div>
           <AccordionTitle titleValue={props.titleValue}/>
            <button onClick={onclickStar}>TOOGLE</button>
            {!star && <Star/>}
        </div>

    );
}
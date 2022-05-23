import React from 'react';
import {Star} from "./Star";

type propsAccordionType = {
    titleValue:string
    collapsed:boolean
}
export const Accordion:React.FC<propsAccordionType>=()=>{
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}
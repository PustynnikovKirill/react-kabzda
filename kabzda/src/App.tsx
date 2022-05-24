import React from 'react';
import {OnOff} from "./OnOff/OnOff";
import {Uncontrolaccordion} from "./Accordion/Accordion";
import {UnControledRating} from "./Rating/Rating";


export const App = () => {
    return (
        <div className="App">
            <OnOff/>
            <Uncontrolaccordion titleValue={"Menu"}/>
            <UnControledRating/>
        </div>
    );
}



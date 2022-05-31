import React, {useState} from 'react';
import {OnOff} from "./OnOff/OnOff";
import {Uncontrolaccordion} from "./Accordion/Uncontrolaccordion";
import {Rating, ValueType} from "./Rating/Rating";
import {OnOffControl} from "./OnOff/OnOffControl";
import {Select} from "./select/select";


export const App = () => {

    let [rating, setRating]=useState<ValueType>(0)
    let [on,setOn] = useState(false)
    let [star,setStar]=useState(false)

    const onclick = (value:any) => {
        alert('gghfjyghjyjdnj ${value} rtyhjrtj ')
    }

    return (
        <div className="App">
            <OnOff/>
            <OnOffControl on={on}  setOn={setOn}/>
            <Uncontrolaccordion collapsed={star}
                                setStar={setStar}
                                titleValue={"Menu"}
                                items={[{title:'Kirill', value:1},
                                      {title:'Dimych', value:2},
                                      {title:'Valerqa', value:3}]}
                                onClick={onclick}
            />
            <Rating value={rating}  setRating={setRating}/>
        </div>
    );
}



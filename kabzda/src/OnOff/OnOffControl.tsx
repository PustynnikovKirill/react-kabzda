import React, {useState} from 'react';

type OnOffType = {
    on?: boolean
}

export const OnOff = (props:OnOffType) => {
    let [on,setOn] = useState(false)
    const onStyle = {
        width: '30px',
        height: '20px',
        border:'1px solid black',
        display:'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: on ? 'green': 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border:'1px solid black',
        display:'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: on ? 'white': 'red'
    }
    const indicatorStyle = {
        width:'10px',
        height:'10px',
        borderRadius:'5px',
        border:'1px solid black',
        display:'inline-block',
        marginLeft: '2px',
        marginTop: '5px',
        backgroundColor: on ? 'green': 'red'
    }
    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>on</div>
            <div style={indicatorStyle} onClick={()=>{setOn(true)}}></div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>off</div>

        </div>
    );
}
import React, {useState} from 'react';

type OnOffType = {
    on?: boolean
    off?: boolean
}

export const OnOff = (props:OnOffType) => {
    let [on,setOn] = useState(false)
    const onStyle = {
        width: '30px',
        height: '20px',
        border:'1px solid black',
        display:'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green': 'red'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border:'1px solid black',
        display:'inline-block',
        marginLeft: '2px',
        backgroundColor: on ? 'while': 'red'
    }
    const indicatorStyle = {
        width:'30px',
        height:'30px',
        borderRadius:'15px',
        border:'1px solid black',
        display:'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green': 'red'
    }
    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>on</div>
            <div style={offStyle} onClick={()=>{}}>off</div>
            <div style={indicatorStyle} onClick={()=>{}}></div>
        </div>
    );
}
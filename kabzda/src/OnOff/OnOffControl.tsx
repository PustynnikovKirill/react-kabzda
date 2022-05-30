import React, {useState} from 'react';

type OnOffType = {
    on: boolean
    setOn:(on: boolean)=>void
}

export const OnOffControl = (props:OnOffType) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border:'1px solid black',
        display:'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: props.on ? 'green': 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border:'1px solid black',
        display:'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor:  props.on ? 'white': 'red'
    }
    const indicatorStyle = {
        width:'10px',
        height:'10px',
        borderRadius:'5px',
        border:'1px solid black',
        display:'inline-block',
        marginLeft: '2px',
        marginTop: '5px',
        backgroundColor:  props.on ? 'green': 'red'
    }
    return (
        <div>
            <div style={onStyle} onClick={()=>{props.setOn(true)}}>on</div>
            <div style={indicatorStyle} onClick={()=>{props.setOn(true)}}></div>
            <div style={offStyle} onClick={()=>{props.setOn(false)}}>off</div>

        </div>
    );
}
import React, {useState} from 'react';

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5



export type RatingType = {
    value: ValueType
    setRating: (rating:ValueType) => void
}

export const Rating = (props: RatingType) => {
    return (
        <div>
            <Star value={1} selected={props.value > 0} setRating={props.setRating}/>
            <Star value={2} selected={props.value > 1} setRating={props.setRating}/>
            <Star value={3} selected={props.value > 2} setRating={props.setRating}/>
            <Star value={4} selected={props.value > 3} setRating={props.setRating}/>
            <Star value={5} selected={props.value > 4} setRating={props.setRating}/>
        </div>
    );
}

type StarType = {
    selected: boolean,
    setRating: (value:ValueType) => void
    value:ValueType
}

export const Star = (props: StarType) => {
    return (
        <>
            <span onClick={() => {
                props.setRating(props.value)
            }}>{props.selected ? <b>star</b> : 'star'}</span>
        </>
    );
}



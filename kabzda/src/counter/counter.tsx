import React, {useMemo, useState} from "react";

export const Example1 = () => {
    let [a, setA] = useState<number>(0)
    let [b, setB] = useState<number>(0)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=>{
        for (let i = 1; i<=a; i++){
        resultA = resultA * i;
    }
        return resultA
    },[a])

    for (let i = 1; i<=b; i++){
        resultB = resultB * i;
    }
    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr />
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for a: {resultB}
            </div>
        </>
    )


}
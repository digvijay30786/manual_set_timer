import React, { useEffect, useState } from "react";

export default function Inputtimer()
{
    const [etimer, seteTimer] = useState("");

    const [finaletimer, setFinaleTimer] = useState(0);
    const [finalatimer, setFinalaTimer] = useState(0);
    const [state, setState] = useState(false);
    const [interval, setInterva] = useState(false);
    const handleStart = () => {
        setState(true);
    }
    const handleUpdate = (e) =>
    {
        e.preventDefault();
        setFinaleTimer(etimer);
        seteTimer("");
    }


    useEffect(() => {
        if (state)
        {
            var s = setInterval(() => {
                if (finalatimer == finaletimer)
                {
                    clearInterval(s);
                    setState(true);
                    return finalatimer;
                }
                else
                return setFinalaTimer(finalatimer+1);
            }, 1000);
            return function ()
            {
                clearInterval(s);
            }
        }
        else
        {
            setFinalaTimer(finalatimer);
        }
        })




    return <React.Fragment>
        <h1>[Timer]</h1>
        <form onSubmit={handleUpdate}>
            <label htmlFor="endtimer" >End Timer</label>
            <input type="text" onChange={(e) => { seteTimer(e.target.value) }} name="etimer"/>
            <input type="submit" value="Save"/>
        </form>
        
        <h1>{finalatimer}s : {finaletimer}s</h1>
        <button onClick={handleStart}>Start</button><button onClick={() => { setState(false) }}>Stop</button><button onClick={() => { setFinalaTimer(0);setState(false)}}>Reset</button>
   </React.Fragment>
}
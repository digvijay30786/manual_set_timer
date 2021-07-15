import { useEffect, useState } from "react"

export default function Stopwatch()
{
    const [count, setCount] = useState(0);
    const [state, setState] = useState(false);
    const [interval, setInterva] = useState(false);
    const handleStart = () => {
        setState(true);
    }
  
    useEffect(() => {
        if (state)
        {
            var s = setInterval(() => {
                setCount(count+1);
            }, 1000);
            return function ()
            {
                clearInterval(s);
            }
        }
        else
        {
            setCount(count);
        }
        })
        
        
    return <><h1>[Stopwatch]</h1><h1>{count}s</h1><button onClick={handleStart}>Start</button><button onClick={() => { setState(false) }}>Stop</button><button onClick={() => { setCount(0);setState(false)}}>Reset</button></>
}
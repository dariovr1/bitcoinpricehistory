import { useEffect, useRef } from "react";

export const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

export const useComponentDidUpdate = (
    effect,
    dep = []
) => {
    const hasMounted = useRef(false);
    useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true;
            return;
        }
        effect();
    },dep);
}

export const useFirstRun = () => {
    const firstrun = useRef(false);

    useEffect(() => {
        if (!firstrun.current) {
            firstrun.current = true;
        }
    })

    return firstrun.current;

}


export const useInterval = (callback, delay) => {
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }


export const UseEffect = (
    effect,
    dep 
) => {
        const infirstrun = useFirstRun();
        const prevDep = usePrevious(dep);

        effect({
            previus : prevDep,
            changed :  (prevDep) ? Object.keys(prevDep).filter(k => prevDep[k] !== dep[k]) : "",
            infirstrun,
        });
}
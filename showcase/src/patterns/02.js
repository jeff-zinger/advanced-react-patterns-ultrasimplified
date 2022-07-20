// CustomHookForAnimation
import React, {useCallback, useEffect, useState} from 'react'
import {initializeAnimationTimeline} from "./01";
import MediumClap from "./MediumClap";

/** ====================================
 *        🔰USAGE
 Below's how a potential user
 may consume the component API
 ==================================== **/

export const useClapAnimation = () => {
    const [animationTimeline, setAnimationTimeline] = useState(() => new mojs.Timeline())

    const [{clapRef, clapCountRef, clapTotalRef}, setRefs] = useState({})

    const setRef = useCallback((node) => {
        setRefs(prevState => ({
            ...prevState,
            [node.dataset.refkey]: node
        }))
    }, [])

    useEffect(() => {
        const newAnimationTimeline = initializeAnimationTimeline(new mojs.Timeline(), {
            clapEl: clapRef,
            clapCountEl: clapCountRef,
            clapTotalEl: clapTotalRef
        })
        setAnimationTimeline(newAnimationTimeline)
    }, [clapRef, clapCountRef, clapTotalRef])

    return {animationTimeline, setRef}
}

const Usage = () => {
    const {animationTimeline, setRef} = useClapAnimation()
    return <MediumClap animationTimeline={animationTimeline} setRef={setRef}/>
};

export default Usage;

// CustomHookForAnimation
import React, {useCallback, useEffect, useState} from 'react'
import MediumClap from "./MediumClap";
import initializeAnimationTimeline from "./initializeAnimationTimeline";

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
        const newAnimationTimeline = initializeAnimationTimeline(animationTimeline, {
            clapEl: clapRef,
            clapCountEl: clapCountRef,
            clapTotalEl: clapTotalRef
        })
        if (newAnimationTimeline) {
            setAnimationTimeline(newAnimationTimeline)
        }
    }, [clapRef, clapCountRef, clapTotalRef])

    return {animationTimeline, setRef}
}

const Usage = () => {
    const {animationTimeline, setRef} = useClapAnimation()
    return <MediumClap animationTimeline={animationTimeline} setRef={setRef}/>
};

export default Usage;

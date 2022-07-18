import React from 'react'

// CustomHookForAnimation

import {useEffect, useState} from "react";
import {initializeAnimationTimeline, MediumClap} from "./01";

const useClapAnimation = () => {
    const [animationTimeline, setAnimationTimeline] = useState(() => new mojs.Timeline())

    useEffect(() => {
        const newAnimationTimeline = initializeAnimationTimeline(animationTimeline)
        setAnimationTimeline(newAnimationTimeline)
    }, [])

    return animationTimeline
}

/** ====================================
 *        🔰USAGE
 Below's how a potential user
 may consume the component API
 ==================================== **/

const Usage = () => {
    return (
        <MediumClap />
    )
};

export default Usage;

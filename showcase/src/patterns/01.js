import React, {Component} from "react";
import mojs from "mo-js";
import MediumClap from "./MediumClap";
import initializeAnimationTimeline from "./initializeAnimationTimeline";

/** ====================================
 *          🔰HOC
Higher Order Component for Animation
==================================== **/
const withClapAnimation = (WrappedComponent) => {
  class WithClapAnimation extends Component {
    animationTimeline = new mojs.Timeline();
    state = {
      animationTimeline: this.animationTimeline,
    };

    componentDidMount() {
      const newAnimationTimeline = initializeAnimationTimeline(this.animationTimeline, {clapEl: "#clap", clapCountEl: "#clapCount", clapTotalEl: "#clapCountTotal"})
      this.setState({ animationTimeline: newAnimationTimeline });
    }

    render() {
      return (
        <WrappedComponent
          animationTimeline={this.state.animationTimeline}
          {...this.props}
        />
      );
    }
  }

  WithClapAnimation.displayName = `WithClapAnimation(${getDisplayName(
    WrappedComponent
  )})`;

  return WithClapAnimation;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/** ====================================
    *        🔰USAGE
    Below's how a potential user
    may consume the component API
==================================== **/

const Usage = () => {
  const AnimatedMediumClap = withClapAnimation(MediumClap);
  return <AnimatedMediumClap />;
};

export default Usage;

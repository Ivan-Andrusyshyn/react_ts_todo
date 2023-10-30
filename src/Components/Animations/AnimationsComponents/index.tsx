import React, { ReactNode } from "react";
import { useSpring, animated } from "react-spring";

interface AnimatedContainerProps {
  children: ReactNode;
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({ children }) => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(-100px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 500 },
  });

  return <animated.div style={animationProps}>{children}</animated.div>;
};

export default AnimatedContainer;

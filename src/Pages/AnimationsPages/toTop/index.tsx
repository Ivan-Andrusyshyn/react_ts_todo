import { useSpring, animated } from "react-spring";
import { AnimatedContainerProps } from "../types/types";

const AnimatedContainerTop: React.FC<AnimatedContainerProps> = ({
  children,
}) => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(100px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  return <animated.div style={animationProps}>{children}</animated.div>;
};
export default AnimatedContainerTop;

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import AnimatedProgressProvider from '../animated-progress-provider';
import { easeQuadInOut } from 'd3-ease';

const CircularProgressBar = ({ percentage }) => {
  return (
    <AnimatedProgressProvider
      valueStart={0}
      valueEnd={percentage}
      duration={3}
      easingFunction={easeQuadInOut}
    >
      {(value) => {
        const roundedValue = Math.round(value);
        return (
          <CircularProgressbarWithChildren
            value={value}
            counterClockwise={false}
            styles={{
              path: {
                transition: 'none',
                stroke: "#c48445",
                strokeLinecap: 'round',
              },

              trail: {
                strokeLinecap: 'round',
                stroke:"rgba(255,255,255,0.1)"
              },
            }}
          >
            <div
              className="progressbar-value"
            >
              {roundedValue}%
            </div>
          </CircularProgressbarWithChildren>
        );
      }}
    </AnimatedProgressProvider>
  );
};

export default CircularProgressBar;

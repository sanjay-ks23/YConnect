interface WaveDividerProps {
  color?: string;
  flip?: boolean;
  variant?: 1 | 2 | 3;
}

const wavePaths = {
  1: "M0,32 C240,96 480,96 720,32 C960,-32 1200,-32 1440,32 L1440,120 L0,120 Z",
  2: "M0,64 C360,128 720,0 1080,64 C1260,96 1440,64 1440,64 L1440,120 L0,120 Z",
  3: "M0,48 C180,96 360,96 540,48 C720,0 900,0 1080,48 C1260,96 1350,96 1440,48 L1440,120 L0,120 Z"
};

export function WaveDivider({ color = "#f3f4f6", flip = false, variant = 1 }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none relative z-20 -mt-[1px] -mb-[1px] ${flip ? "transform rotate-180" : ""}`}>
      <svg
        className="block relative w-full h-[60px] md:h-[120px]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d={wavePaths[variant]}
          fill={color}
          className="transition-all duration-700 ease-in-out"
        ></path>
      </svg>
    </div>
  );
}

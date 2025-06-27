const OndasAnimadas = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
      <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="w-full h-24">
        <path
          d="M0,100 C300,200 900,0 1200,100 L1200,200 L0,200 Z"
          fill="#93c5fd"
          opacity="0.3"
        />
        <path
          d="M0,120 C400,0 800,200 1200,80 L1200,200 L0,200 Z"
          fill="#3b82f6"
          opacity="0.4"
        />
        <path
          d="M0,140 C500,200 700,0 1200,120 L1200,200 L0,200 Z"
          fill="#1e40af"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default OndasAnimadas;

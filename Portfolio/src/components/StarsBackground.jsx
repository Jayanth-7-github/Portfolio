export default function StarsBackground() {
  const shootingStars = [
    {
      top: "-18%",
      left: "12%",
      delay: "1.2s",
      duration: "3.8s",
      dx: "38vw",
      dy: "130vh",
      rot: "24deg",
    },
    {
      top: "-26%",
      left: "52%",
      delay: "6.5s",
      duration: "4.6s",
      dx: "26vw",
      dy: "135vh",
      rot: "26deg",
    },
    {
      top: "-22%",
      left: "78%",
      delay: "12.0s",
      duration: "5.2s",
      dx: "18vw",
      dy: "140vh",
      rot: "28deg",
    },
  ];

  return (
    <div aria-hidden="true" className="stars-root">
      <div className="stars-layer" />
      <div className="stars-layer stars-layer--dense" />
      <div className="stars-layer stars-layer--glow" />

      <div className="shooting-stars">
        {shootingStars.map((s) => (
          <span
            key={`${s.top}-${s.delay}`}
            className="shooting-star"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: s.delay,
              animationDuration: s.duration,
              "--dx": s.dx,
              "--dy": s.dy,
              "--rot": s.rot,
            }}
          />
        ))}
      </div>
    </div>
  );
}

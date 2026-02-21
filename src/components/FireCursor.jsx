import { useEffect } from "react";

function FireCursor() {
  useEffect(() => {
    const moveHandler = (e) => {
      const particle = document.createElement("div");
      particle.className = "fire-particle";
      particle.style.left = e.clientX + "px";
      particle.style.top = e.clientY + "px";

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 600);
    };

    window.addEventListener("mousemove", moveHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return null;
}

export default FireCursor;
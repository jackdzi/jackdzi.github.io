import React, { useEffect, useRef } from "react";

const CanvasDots: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const ctx = canvas!.getContext("2d");
    if (!ctx) return;

    const colorDot = "#CECECE";
    const lightGreenDot = "#90EE90";
    const color = "#CECECE";
    let animationFrameId: number;

    const mousePosition = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    let scrollPosition: number = 0;

    function calculateDotNumber() {
      const factor = 0.0005;
      return Math.floor(window.innerWidth * window.innerHeight * factor);
    }

    function calculateRadiusNumber() {
      const factor = window.innerWidth * window.innerHeight;
      return Math.floor((230 / (1920 * 1080)) * factor);
    }

    const dots = {
      nb: calculateDotNumber(),
      distance: 60,
      d_radius: calculateRadiusNumber(),
      array: [] as Dot[],
    };

    class Dot {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      radius: number = 0;
      color: string = colorDot;

      constructor() {
        if (canvas) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.vx = -0.5 + Math.random();
          this.vy = -0.5 + Math.random();
          this.color = Math.random() < 0.045 ? lightGreenDot : colorDot;
          this.radius =
            this.color == lightGreenDot ? Math.random() * 2.5 : Math.random();
        }
      }

      create() {
        if (ctx) {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.fill();
        }
      }

      animate() {
        if (canvas) {
          if (this.y < 0 || this.y > canvas.height) {
            this.vy = -this.vy;
          }
          if (this.x < 0 || this.x > canvas.width) {
            this.vx = -this.vx;
          }
          this.x += this.vx;
          this.y += this.vy;
        }
      }

      line() {
        if (ctx) {
          dots.array.forEach((j_dot) => {
            const dx = this.x - j_dot.x;
            const dy = this.y - j_dot.y;
            const mouse_dx = this.x - mousePosition.x;
            const mouse_dy = this.y - mousePosition.y - 1 * scrollPosition;

            if (
              Math.sqrt(dx * dx + dy * dy) < dots.distance &&
              Math.sqrt(mouse_dx * mouse_dx + mouse_dy * mouse_dy) <
                dots.d_radius
            ) {
              ctx.strokeStyle =
                j_dot.color === lightGreenDot ? lightGreenDot : color;
              ctx.lineWidth = j_dot.color === lightGreenDot ? 0.8 : 0.2;
              ctx.beginPath();
              ctx.moveTo(this.x, this.y);
              ctx.lineTo(j_dot.x, j_dot.y);
              ctx.stroke();
              ctx.closePath();
            }
          });
        }
      }
    }

    const updateCanvasSize = () => {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      canvas!.style.display = "block";
      ctx.fillStyle = colorDot;
      ctx.lineWidth = 0.1;
      ctx.strokeStyle = color;
      dots.nb = calculateDotNumber();
      dots.d_radius = calculateRadiusNumber();
      dots.array = Array.from({ length: dots.nb }, () => new Dot());
    };

    const createDots = () => {
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dots.array.forEach((dot) => {
          dot.create();
          dot.line();
          dot.animate();
        });
      }

      animationFrameId = requestAnimationFrame(() => {
        setTimeout(createDots, 20);
      });
    };

    updateCanvasSize();
    createDots();

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.x = event.clientX;
      mousePosition.y = event.clientY;
    };

    const handleScroll = () => {
      scrollPosition = window.scrollY;
    };

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute" />;
};

export default CanvasDots;

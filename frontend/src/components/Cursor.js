// src/components/Cursor.js
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const rafRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const displayed = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // create cursor element
    const el = document.createElement("div");
    el.className = "custom-cursor";
    document.body.appendChild(el);
    cursorRef.current = el;

    // show custom cursor only on non-touch devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      el.style.display = "none";
      return () => el.remove();
    }

    // mouse move updates target pos
    function onMove(e) {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      // ensure it's visible
      el.style.display = "block";
      if (!rafRef.current) rafRef.current = requestAnimationFrame(render);
    }

    // simple lerp for smooth movement
    function render() {
      const dx = pos.current.x - displayed.current.x;
      const dy = pos.current.y - displayed.current.y;
      displayed.current.x += dx * 0.2;
      displayed.current.y += dy * 0.2;
      el.style.transform = `translate3d(${displayed.current.x}px, ${displayed.current.y}px, 0) translate(-50%, -50%)`;
      rafRef.current = null;
    }

    // expand on hover targets
    function addHoverListeners() {
      const targets = Array.from(document.querySelectorAll("a, button, .card, .btn, .nav-link"));
      targets.forEach((t) => {
        t.addEventListener("mouseenter", onHover);
        t.addEventListener("mouseleave", onUnhover);
      });
    }
    function removeHoverListeners() {
      const targets = Array.from(document.querySelectorAll("a, button, .card, .btn, .nav-link"));
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", onHover);
        t.removeEventListener("mouseleave", onUnhover);
      });
    }

    function onHover() {
      el.classList.add("cursor--hover");
    }
    function onUnhover() {
      el.classList.remove("cursor--hover");
    }

    // hidden when leaving window
    function onLeave() {
      el.style.opacity = "0";
    }
    function onEnter() {
      el.style.opacity = "1";
    }

    // attach listeners
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    addHoverListeners();

    // observe DOM changes so new links/buttons/cards get hover listeners
    const observer = new MutationObserver(() => {
      removeHoverListeners();
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // cleanup
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      removeHoverListeners();
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      el.remove();
    };
  }, []);

  return null;
}

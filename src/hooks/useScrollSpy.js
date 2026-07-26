import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return { active, scrolled };
}

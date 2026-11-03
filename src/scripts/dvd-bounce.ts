const logo = document.querySelector<HTMLImageElement>('.dvd-logo');

if (logo) {
  const startBouncing = () => {
    let x = Math.random() * Math.max(0, window.innerWidth - logo.offsetWidth);
    let y = Math.random() * Math.max(0, window.innerHeight - logo.offsetHeight);
    let vx = (Math.random() < 0.5 ? -1 : 1) * 150;
    let vy = (Math.random() < 0.5 ? -1 : 1) * 115;
    let previousTime = performance.now();

    const animate = (now: number) => {
      const elapsed = Math.min((now - previousTime) / 1000, 0.05);
      previousTime = now;

      const maxX = Math.max(0, window.innerWidth - logo.offsetWidth);
      const maxY = Math.max(0, window.innerHeight - logo.offsetHeight);
      x += vx * elapsed;
      y += vy * elapsed;

      if (x <= 0 || x >= maxX) {
        x = Math.min(maxX, Math.max(0, x));
        vx *= -1;
      }
      if (y <= 0 || y >= maxY) {
        y = Math.min(maxY, Math.max(0, y));
        vy *= -1;
      }

      logo.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      requestAnimationFrame(animate);
    };

    logo.style.visibility = 'visible';
    requestAnimationFrame(animate);
  };

  if (logo.complete && logo.naturalWidth > 0) {
    startBouncing();
  } else {
    logo.addEventListener('load', startBouncing, { once: true });
  }
}

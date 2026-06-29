function startHeroCounters(stats) {
  stats.forEach(stat => {
    const target = parseInt(stat.dataset.target, 10);
    if (Number.isNaN(target) || target <= 0) return;

    let current = 0;
    const duration = 1600;
    const stepTime = Math.max(Math.floor(duration / target), 20);
    const increment = Math.max(1, Math.ceil(target / (duration / stepTime)));

    const intervalId = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(intervalId);
      }
      stat.textContent = current.toLocaleString('es-AR') + '+';
    }, stepTime);
  });
}

function initHeroCounters() {
  const section = document.getElementById('seccion-hero');
  if (!section) return;

  const runIfReady = () => {
    const stats = section.querySelectorAll('.estadisticas .item-estadistica h2[data-target]');
    if (stats.length) {
      startHeroCounters(stats);
      return true;
    }
    return false;
  };

  if (runIfReady()) return;

  const observer = new MutationObserver((mutations, obs) => {
    if (runIfReady()) {
      obs.disconnect();
    }
  });

  observer.observe(section, { childList: true, subtree: true });
}

document.addEventListener('DOMContentLoaded', initHeroCounters);

console.log("Hello from scripts/main.js");

  (function () {
    var root = document.documentElement;
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function setTheme(next) {
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      btn.setAttribute('aria-pressed', String(next === 'dark'));
    }

    btn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') || 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });

    // sync button state on load
    setTheme(root.getAttribute('data-theme') || 'light');
  }());


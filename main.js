/* Xiaoting Du — homepage interactions. Vanilla JS, no dependencies. */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav__links a"));

  /* Mobile hamburger menu */
  if (toggle) {
    toggle.addEventListener("click", function () { nav.classList.toggle("open"); });
  }
  /* Close menu after tapping a link (mobile) */
  links.forEach(function (a) {
    a.addEventListener("click", function () { nav.classList.remove("open"); });
  });

  /* Active-section highlight in nav via IntersectionObserver */
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("active"); });
          var active = byId[e.target.id];
          if (active) active.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* Scroll-reveal for sections (staggered, runs once) */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function revealAll() { reveals.forEach(function (el) { el.classList.add("in"); }); }

  if (reduceMotion || !("IntersectionObserver" in window) || !reveals.length) {
    revealAll();
  } else {
    var ro = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    reveals.forEach(function (el) { ro.observe(el); });
    /* Safety net: never leave content hidden if something stalls */
    setTimeout(revealAll, 3000);
  }
})();

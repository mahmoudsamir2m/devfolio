function updateActiveSectionOnScroll() {
  const active = [...document.querySelectorAll("section[id]")]
    .find(s => {
      const r = s.getBoundingClientRect();
      return r.top <= 100 && r.bottom >= 100;
    })?.id;

  if (!active) return;

  const links = document.querySelectorAll("#navbar-list a[data-section]");
  document.querySelector("#navbar-list")?.setAttribute("data-active-link", active);
  
  links.forEach(link => 
    link.setAttribute("data-active", link.getAttribute("data-section") === active)
  );
}

updateActiveSectionOnScroll();
window.addEventListener("scroll", updateActiveSectionOnScroll);

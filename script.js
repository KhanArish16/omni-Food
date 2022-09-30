//////////////////////////////////////////////////////////
// /Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) {
//     document.body.classList.add("no-flexbox-gap");
//   }
// }
// checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

//////////////////////////////////////////////////////////////
// our part
///////////////////////////////////////////////////////////////

let currentYear = document.querySelector(".year");
let updatedYear = new Date().getFullYear();
currentYear.textContent = updatedYear;
console.log(currentYear);

/////////////////////////
// mobile navigatio work

let btnNavEl = document.querySelector(".btn-mobile-nav");

let headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

let allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    let href = link.getAttribute("href");

    // scroll to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // scroll to other link (all)
    else if (href !== "#" && href.startsWith("#")) {
      let sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

//////////////////////////////////
// sticky navigation
// ////////////////////
let sectionHeroEl = document.querySelector(".section-hero");
let obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

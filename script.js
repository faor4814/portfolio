/* =========================================================
   Your work goes here.
   Add one object per project. The image path is relative to
   this folder, so drop files into /images and reference them
   as "images/your-file.png".
   ========================================================= */

const projects = [
  { image: "images/ui-1.png", title: "Shop UI" },
  { image: "images/ui-2.png", title: "Inventory UI" },
  { image: "images/ui-3.png", title: "Settings UI" },
  { image: "images/daily-rewards.png?v=2", title: "Daily Rewards UI" },
];

/* ---------- Build the grid ---------- */

const grid = document.getElementById("grid");

projects.forEach((p) => {
  const card = document.createElement("button");
  card.className = "card";
  card.type = "button";
  card.setAttribute("aria-label", "Open " + p.title);

  const box = document.createElement("div");
  box.className = "card__box";

  const img = document.createElement("img");
  img.className = "card__img";
  img.src = p.image;
  img.alt = p.title;
  img.loading = "lazy";
  box.appendChild(img);

  const caption = document.createElement("p");
  caption.className = "card__caption";
  caption.textContent = p.title;

  card.appendChild(box);
  card.appendChild(caption);

  if (p.sub) {
    const sub = document.createElement("p");
    sub.className = "card__sub";
    sub.textContent = p.sub;
    card.appendChild(sub);
  }

  // If the image file is not there yet, show a placeholder box instead.
  img.addEventListener("error", () => {
    img.remove();
    const ph = document.createElement("div");
    ph.className = "card__placeholder";
    ph.textContent = "COMING SOON";
    box.appendChild(ph);
    card.dataset.missing = "true";
  });

  card.addEventListener("click", () => {
    if (card.dataset.missing === "true") return;
    openLightbox(p.image, p.title);
  });

  grid.appendChild(card);
});

/* ---------- Lightbox ---------- */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");

function openLightbox(src, caption) {
  lightboxImg.src = src;
  lightboxImg.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

/* ---------- Footer year ---------- */

document.getElementById("year").textContent = new Date().getFullYear();

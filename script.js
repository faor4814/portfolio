/* =========================================================
   Your work goes here.
   Add one object per project. The image path is relative to
   this folder, so drop files into /images and reference them
   as "images/your-file.png".

   crop: [x, y, width, height] in image pixels is the UI frame
   shown on the card, centered over the Studio background so
   every card fits the same way. Clicking a card still opens
   the full screenshot.
   ========================================================= */

const projects = [
  { image: "images/shop.webp", title: "Shop UI", crop: [40, 41, 1021, 571] },
  { image: "images/inventory.webp", title: "Inventory UI", crop: [38, 35, 1033, 623] },
  { image: "images/settings.png?v=2", title: "Settings UI", crop: [24, 26, 975, 555] },
  { image: "images/daily-rewards.png?v=4", title: "Daily Rewards UI", crop: [21, 30, 991, 547] },
  { image: "images/index.webp", title: "Index UI", crop: [307, 47, 917, 573] },
  { image: "images/trade.png", title: "Trade UI", crop: [25, 24, 987, 595] },
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

  if (p.crop) {
    const [x, y, w, h] = p.crop;
    const frame = document.createElement("div");
    frame.className = "card__frame";
    frame.style.aspectRatio = `${w} / ${h}`;
    img.addEventListener("load", () => {
      img.style.width = `${(img.naturalWidth / w) * 100}%`;
      img.style.left = `${(-x / w) * 100}%`;
      img.style.top = `${(-y / h) * 100}%`;
    });
    frame.appendChild(img);
    box.appendChild(frame);
  } else {
    box.appendChild(img);
  }

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

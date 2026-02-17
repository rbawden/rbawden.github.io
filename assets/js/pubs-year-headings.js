document.addEventListener("DOMContentLoaded", () => {
  const bib = document.querySelector(".bibliography");
  if (!bib) return;

  const items = bib.querySelectorAll("li");
  if (!items.length) return;

  let lastYear = null;

  items.forEach((li) => {
    // Try to find a 4-digit year in the text (works with most CSL outputs)
    const m = li.textContent.match(/\b(19|20)\d{2}\b/);
    const year = m ? m[0] : null;

    if (year && year !== lastYear) {
      const header = document.createElement("li");
      header.className = "pub-year-header";
      header.setAttribute("aria-hidden", "true");
      header.innerHTML = `<span>${year}</span>`;
      bib.insertBefore(header, li);
      lastYear = year;
    }
  });
});

export function renderHeader(): void {
  const header: HTMLDivElement | null = document.querySelector<HTMLDivElement>("#header");

  if (header !== null) {
    header.innerHTML = `
      <header class="header">
        <h1 class="logo">Mi Portafolio</h1>
        <nav class="social-icons">
          <a href="https://www.tiktok.com" target="_blank" aria-label="TikTok">
            <i class="fab fa-tiktok"></i>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </nav>
      </header>
    `;
  }
}

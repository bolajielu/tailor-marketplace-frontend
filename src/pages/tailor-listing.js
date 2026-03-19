import { tailorSamples } from '../data/tailors.js';

export function tailorListingPage() {
  const cards = tailorSamples
    .map(
      (tailor) => `
        <article class="card">
          <h3>${tailor.name}</h3>
          <p>${tailor.specialty}</p>
          <p><strong>${tailor.city}</strong> · ⭐ ${tailor.rating}</p>
          <a href="#tailor-detail" data-route="tailor-detail">View profile</a>
        </article>
      `,
    )
    .join('');

  return `
    <section class="page">
      <p class="page-tag">Tailor listing</p>
      <h2>Browse tailors</h2>
      <div class="card-grid">${cards}</div>
    </section>
  `;
}

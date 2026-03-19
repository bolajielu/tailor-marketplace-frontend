export function homePage() {
  return `
    <section class="page">
      <p class="page-tag">Home</p>
      <h2>Welcome to your tailor marketplace</h2>
      <p>
        Start simple: show featured tailors, explain how bookings work, and invite users to sign up.
      </p>
      <div class="card-grid">
        <article class="card">
          <h3>For customers</h3>
          <p>Browse tailors, compare reviews, and book fittings in one place.</p>
        </article>
        <article class="card">
          <h3>For tailors</h3>
          <p>Create a profile, add services, and manage bookings from the dashboard.</p>
        </article>
      </div>
    </section>
  `;
}

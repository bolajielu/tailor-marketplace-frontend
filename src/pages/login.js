export function loginPage() {
  return `
    <section class="page narrow-page">
      <p class="page-tag">Login</p>
      <h2>Sign in</h2>
      <form class="stack">
        <label>
          Email
          <input type="email" placeholder="name@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Enter your password" />
        </label>
        <button type="button">Login</button>
      </form>
    </section>
  `;
}

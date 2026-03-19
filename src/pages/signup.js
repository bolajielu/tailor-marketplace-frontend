export function signupPage() {
  return `
    <section class="page narrow-page">
      <p class="page-tag">Signup</p>
      <h2>Create your account</h2>
      <form class="stack">
        <label>
          Full name
          <input type="text" placeholder="Jane Doe" />
        </label>
        <label>
          Email
          <input type="email" placeholder="name@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Create a password" />
        </label>
        <button type="button">Signup</button>
      </form>
    </section>
  `;
}

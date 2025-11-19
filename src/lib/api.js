export async function signUpApi({ firstName, email, password }) {
  const res = await fetch("http://localhost:999/api/auth/sign-up", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, email, password }),
  });

  return res.json();
}

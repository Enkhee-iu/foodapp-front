export const signUpApi = {
  sendEmail: async ({ email }) => {
    return fetch("/api/auth/check-email", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email }),
});
  },

  finishSignup: async ({ email, password }) => {
    return fetch("/api/auth/sign-up", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
});
  },
};

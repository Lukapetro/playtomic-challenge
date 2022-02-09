const config = {
  env: process.env.NODE_ENV,
  baseURI: "https://reqres.in/api",
  endpoints: {
    auth: {
      login: "/login",
      createAccount: "/users/create-account",
      logout: "/users/logout",
      me: "/users/me",
      profile: "/users/profile",
    },
  },
};

export default config;

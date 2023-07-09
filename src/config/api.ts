export const apiBaseURL =
  import.meta.env.VITE_API_URL ?? "http://localhost:4501";

export const isFakeServerOn =
  import.meta.env.VITE_FORCE_FAKE_SERVER ||
  (import.meta.env.DEV && import.meta.env.VITE_IS_FAKE_SERVER);

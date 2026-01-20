// Use a public env for client-side code; fallback to server-only name if needed
export const BACK_END_API_URL =
	process.env.NEXT_PUBLIC_BACKEND_URL || process.env.API_BACKEND_URL || "";

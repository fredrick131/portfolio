const BASE = "/api";

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || `Request failed (${res.status})`);
  }
  return data;
}

export const api = {
  getCertifications: () => request("/certifications"),
  getSkills: () => request("/skills"),
  sendMessage: (payload) =>
    request("/contact", { method: "POST", body: JSON.stringify(payload) }),
};

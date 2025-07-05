export const Role = {
  Guest: 0,
  User: 1,
  Contributor: 2,
  Admin: 3,
} as const;

export type Role = typeof Role[keyof typeof Role];

export function isAuthenticated(): boolean {
  return localStorage.getItem('user') !== null;
}

export function getUserRole(): Role {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const role = parseInt(user?.role ?? 0) as Role;
    return isNaN(role) ? Role.Guest : role;
  } catch {
    return Role.Guest;
  }
}

// User shape stored in the database (includes password)
export type User = {
  name: string;
  email: string;
  password: string;
  phone: string;
  bio: string;
};

// User shape exposed to the client (no password, id is optional)
export type AuthUser = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  bio?: string | null;
};

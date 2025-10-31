"use client";

import { performLogin } from "@/actions/actions";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const { setUser } = useAuth();
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setError(null);

    try {
      const formData = new FormData(event.currentTarget);
      const user = await performLogin(formData);
      setUser(user);
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <div>{error && <p className="error">{error}</p>}</div>
      <form className="login-form" onSubmit={onSubmit}>
        {/* <!-- email --> */}
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        {/* <!-- password --> */}
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800 border border-indigo-800"
        >
          {pending ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </>
  );
}

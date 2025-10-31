"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInOut = () => {
  const { user, setUser } = useAuth();
  const router = useRouter();

  const logout = () => {
    setUser(null);
    router.push("/login");
  };

  return (
    <div>
      {user ? (
        <>
          <span className="mx-2">Hello, {user?.name}</span>
          <span className="mx-1">|</span>
          <a className="cursor-pointer" onClick={logout}>
            Logout
          </a>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default SignInOut;

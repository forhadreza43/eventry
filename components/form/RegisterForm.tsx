import { registerUser } from "@/actions/actions";
import React from "react";

export default function RegisterForm() {
  // const [error, setError] = React.useState<string | null>(null);
  // const [pending, setPending] = React.useState(false);

  // const handleSubmit = async (formData: FormData) => {
  //   try {
  //     setPending(true);
  //     setError(null);
  //     await registerUser(formData);
  //     // Optionally redirect after successful registration
  //     // router.push('/login');
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : "Registration failed");
  //   } finally {
  //     setPending(false);
  //   }
  // };
  return (
    <form className="login-form" action={registerUser}>
      {/* <!-- name --> */}
      <div>
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" id="name" />
      </div>
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
      {/* <!-- phone --> */}
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" name="phone" id="phone" />
      </div>
      {/* <!-- bio --> */}
      <div>
        <label htmlFor="bio">Bio</label>
        <input className="min-h-16" type="text" name="bio" id="bio" />
      </div>

      {/* {error && <div className="text-red-500 text-sm mt-2">{error}</div>} */}

      <button
        type="submit"
        className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800 border border-indigo-800 disabled:opacity-50"
      >
       Register
      </button>
    </form>
  );
}

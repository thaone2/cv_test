function Login() {
  return (
    <>
      <div>
        <h1 className="bold flex flex-col justify-center items-center text-2xl p-8 uppercase ">
          Login
        </h1>
        <form className="flex flex-col p-2 ">
          <div className="form-group flex flex-rows">
            <label className="pr-2 m-2 text-xl" htmlFor="email">
              Email:
            </label>
            <input
              className="border pl-8 m-2 w-full"
              key="email"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group flex flex-rows">
            <label className="pr-2 m-2 text-xl" htmlFor="password">
              Password:
            </label>
            <input
              className="border pl-8 m-2 w-full"
              key="password"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button
            type="submit"
            className=" p-2 m-4 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/50"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;

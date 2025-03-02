"use client";
const ErrorPage = ({ error, reset }) => {
  //   console.log(error);
  return (
    <div>
      <h1 className="text-center text-4xl text-red-500">
        Something went wrong!!!
      </h1>
      <h1 className="text-center text-4xl text-red-500">{error.message}</h1>
      <div className="text-center">
        <button onClick={() => reset()}>Try Again</button>
      </div>
    </div>
  );
};

export default ErrorPage;

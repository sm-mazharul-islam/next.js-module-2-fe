import Link from "next/link";

export const metadata = {
  title: "Home Page",
  description: "This is home page",
};

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 30,
    },
  });
  const shoes = await res.json();
  // console.log(data);

  throw new Error("Error From Home Page");

  return (
    <div className="text-center my-5">
      <h1 className="text-4xl text-center">Welcome To Next.Js Home Page</h1>
      <div className="flex justify-between p-5">
        {shoes.slice(0, 3).map((shoe) => (
          <div key={shoe.id} className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline  btn-primary">
                  Buy Now
                </button>
                <button className="btn btn-outline  btn-primary">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/all-shoes">
        <button className="btn btn-outline  btn-primary">See More</button>
      </Link>
    </div>
  );
};

export default HomePage;

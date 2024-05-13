import Image from "next/image";
// import nextImage from "../../assets/next js image.png";
import nextImage from "@/assets/next js image.png";

const GalleryPage = () => {
  return (
    <div className="text-4xl text-center">
      <h1>Image Optimizations</h1>
      <h2 className="text-center text-2xl">Regular Image Tag</h2>
      <img
        src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      />
      <h2 className="text-center text-2xl"> Next.JS Image Component </h2>
      <Image
        src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      />
      <h2 className="text-center text-2xl"> Local Image </h2>
      <Image
        src={nextImage}
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;

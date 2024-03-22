import Image from "next/image";
import Container from "./container";
import heroImg from "../public/1.jpeg";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              STITCHSWIFT- Tailoring App
            </h1>
            <p className="pt-5 text-xl leading-normal text-indigo-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              From personalized designs to Celebrities' fits,
            </p>
            <p className="pb-5 text-xl leading-normal text-indigo-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              We can recreate it all !
            </p>

            <div className="flex flex-col items-center sm:flex-row">
              <a
                href="/faq"
                rel="noopener"
                className="px-16 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                FAQ
              </a>

            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src="/1.jpeg"
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;
import Image from "next/image";
import img from "./image/img.jpg";

export default function HomePage() {
  return (
    <main className="px-24 py-40 flex flex-col items-center justify-center">
      <div className="flex justify-between items-center w-full max-w-screen-lg">
        <div className="text-left">
          <p className="font-bold text-4xl">Hi There,</p>
          <p className="font-bold text-2xl">I'm Muhammad Awais.</p>
          <p className="font-bold text-1xl">
            I'm a Full Stack Web Developer with a strong focus on building
            <br />
            dynamic, responsive, and user-friendly web applications.
          </p>
          <br />
          <button
            className="bg-black  text-white px-4 py-2 rounded font-bold 
            hover:font-extrabold hover:border-b-4 hover:bg-yellow-400"
          >
            About Me.
          </button>
        </div>

        <div>
          <Image
            src={img}
            alt="mypic"
            width={300}
            height={300}
            className="border-x-8 rounded-lg shadow-2xl hover:scale-105 transform transition duration-300"
          />
        </div>
      </div>
    </main>
  );
}



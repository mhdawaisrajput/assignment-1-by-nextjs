import Link from "next/link";

export default function Header() {
  return (
    <main className="flex justify-around p-2 bg-black text-white">
      <div>
        <h2 className="font-extrabold text-3xl hover:text-yellow-400">Muhammad Awais.</h2>
      </div>

      <nav>
        <ul className="flex gap-x-6 p-2.5">
          <li className="font-bold hover:border-b-4 hover:text-yellow-400 border-yellow-400">
            <Link href="/">Home</Link>
          </li>
          <li className="font-bold hover:border-b-4 hover:text-yellow-400 border-yellow-400">
            <Link href="/">About</Link>
          </li>
          <li className="font-bold hover:border-b-4 hover:text-yellow-400 border-yellow-400">
            <Link href="/">Skills</Link>
          </li>
          <li className="font-bold hover:border-b-4 hover:text-yellow-400 border-yellow-400">
            <Link href="/">Education</Link>
          </li>
          <li className="font-bold hover:border-b-4 hover:text-yellow-400 border-yellow-400">
            <Link href="/">Work</Link>
          </li>
          <li className="font-bold hover:border-b-4 hover:text-yellow-400 border-yellow-400">
            <Link href="/">Experience</Link>
          </li>
          <li className="font-bold hover:border-b-4 hover:text-yellow-400 border-yellow-400">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
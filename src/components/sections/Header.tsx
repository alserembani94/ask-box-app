import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-sky-900 text-white w-full flex justify-center items-center">
      <nav className="w-full max-w-screen-lg p-4 flex justify-between items-center gap-4">
        <p>Nirnama Logo</p>
        <Link href="/dashboard" className="bg-sky-700 py-2 px-8 rounded-full">
          Go to dashboard
        </Link>
      </nav>
    </header>
  );
}
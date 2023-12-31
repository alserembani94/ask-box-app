import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-center items-center my-8 px-8">
      <nav className="border border-slate-100 shadow-md rounded-full w-full max-w-screen-lg p-2 flex justify-between items-center gap-4">
        <p>Nirnama Logo</p>
        <Link href="/dashboard" className="py-2 px-8 rounded-full hover:shadow-inner hover:shadow-slate-400 transition-all text-center">
          Go to dashboard
        </Link>
      </nav>
    </header>
  );
}
import { UserButton } from "@clerk/nextjs";

export default function AuthHeader() {
  return (
    <header className="w-full flex justify-center items-center my-8 px-8">
      <nav className="border border-slate-100 shadow-md rounded-full w-full max-w-screen-lg p-2 flex justify-between items-center gap-4">
        <p>Nirnama Logo</p>
        <UserButton afterSignOutUrl="/"/>
      </nav>
    </header>
  );
}
import { getQuestsByUser, getUserByRef } from '@/app/lib/data';
import { currentUser } from '@clerk/nextjs';


export default async function Dashboard(props: any) {
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;

  const userRef = await getUserByRef(user.id);
  if (!userRef) return <div>User not registered</div>;
  // Need to ask user for new id if they don't have one

  const questions = await getQuestsByUser(userRef.id, props.searchParams.page ? Number(props.searchParams.page) : 1);
  const sharableUrl = new URL(`https://nirnama.atifaiman.dev/ask-me/${userRef.id}`);

  return (
    <main className="flex min-h-screen flex-col items-center px-8 gap-4">
      <div className="flex flex-col w-full max-w-screen-lg items-center bg-slate-500 rounded-lg p-4 text-white text-center break-words">
        <p>Share this link to start accepting questions!</p>
        <a href={sharableUrl.toString()} target="_blank" className="break-all">{sharableUrl.toString()}</a>
      </div>
      <div className="flex flex-col w-full max-w-screen-lg items-center border border-slate-200 rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            questions?.map((question) => (
              <div key={question.id} data-isRead={Boolean(question.read_on)} className="flex flex-col border border-slate-200 hover:bg-slate-200 transition-colors duration-300 rounded-lg p-4 data-[isRead=true]:opacity-50 text-center break-words">
                <p>{question.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}

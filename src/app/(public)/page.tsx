import LottiePlayer from '@/components/LottiePlayer'
import { MdInfoOutline } from 'react-icons/md'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-8">
      <div className="flex flex-col w-full max-w-screen-lg items-center border border-slate-200 rounded-lg p-4">
        <LottiePlayer animationData={require('../../assets/lottie/puzzled.json')} className="w-full max-w-[600px] h-[300px]" />
        <h1>Nirnama</h1>
        <p className="text-center">A platform to have Ask Me Anything session, anonymously!</p>

        <div className="my-8 rounded-lg bg-yellow-100 p-4 w-full max-w-screen-sm flex gap-4 items-center">
          <MdInfoOutline className="text-yellow-600 text-3xl" />
          <hr className="border-yellow-600 border-[0.5px] h-12 opacity-50" />
          <p>Nirnama did not collect any user data from the question sender, except for the question.</p>
        </div>
      </div>
    </main>
  )
}

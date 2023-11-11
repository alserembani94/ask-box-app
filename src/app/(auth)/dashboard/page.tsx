import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>This will be the main dashboard</p>
      <UserButton afterSignOutUrl="/"/>
    </main>
  )
}

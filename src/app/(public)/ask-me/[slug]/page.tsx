import Image from 'next/image'

export default function AskMe({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        This is where user get asked
        {JSON.stringify(params, null, 2)}
      </p>
    </main>
  )
}

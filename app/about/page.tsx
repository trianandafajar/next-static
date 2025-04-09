import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-gray-700">
        Back to{' '}
        <Link href="/" className="text-blue-500 hover:underline">
          Homepage
        </Link>
      </p>
    </main>
  )
}

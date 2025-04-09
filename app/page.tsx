import Link from 'next/link'

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Homepage</h1>
      <p className="text-lg mb-2">This is the Homepage</p>
      <p className="text-blue-600 hover:underline">
        Visit the <Link href="/about">About</Link> page.
      </p>
    </main>
  )
}

export default Home

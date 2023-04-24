import Link from 'next/link';

export default async function Home() {
  return (
    <main className="min-h-full p-7">
      <h1>Hello</h1>
      <Link href="/person/single-person">Go to Single Person Page</Link>
      <p className="font-thin">font-thin</p>
      <p className="font-extralight">font-extralight</p>
      <p className="font-light">font-light</p>
      <p className="font-normal">font-normal</p>
      <p className="font-medium">font-medium</p>
      <p className="font-semibold">font-semibold</p>
      <p className="font-bold">font-bold</p>
      <p className="font-extrabold">font-extrabold</p>
      <p className="font-black">font-black</p>
      <hr className="my-6" />
      <h2 className="text-2xl font-bold">
        Why Tailwind uses <code>9999px</code> for{' '}
        <span className="font-mono">rounded-full</span>
      </h2>
      <p className="my-5 font-mono">border-radius: 50%;</p>
      <div className="flex gap-8">
        <div
          className="h-32 w-32 border-4 border-pink-600"
          style={{ borderRadius: '50%' }}
        />
        <div
          className="h-32 w-64 border-4 border-pink-600"
          style={{ borderRadius: '50%' }}
        />
      </div>
      <p className="my-5 font-mono">border-radius: 9999px;</p>
      <div className="mb-6 flex gap-8">
        <div className="h-32 w-32 rounded-full border-4 border-pink-600" />
        <div className="h-32 w-64 rounded-full border-4 border-pink-600" />
      </div>
    </main>
  );
}

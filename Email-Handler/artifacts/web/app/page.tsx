export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Swift Mail</h1>
        <p className="mt-4 text-lg text-gray-600">
          Fast and reliable email handling service
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}

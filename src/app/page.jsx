export default function Home() {
  return (
    <div className="items-center justify-items-center  bg-cyan-500 min-h-screen w-full">
      <section className="max-w-3xl mx-auto text-center  px-4">
        <h2 className="text-4xl font-bold mb-4 pt-10">What is Next.js?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Next.js is a React framework that enables developers to build blazing
          fast and SEO-friendly web applications. With powerful features like
          server-side rendering, static generation, API routes, and more — it's
          perfect for modern web development.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-2">Key Features:</h3>
        <ul className="text-left text-gray-600">
          <li>⚡ Server-side Rendering (SSR)</li>
          <li>🚀 Static Site Generation (SSG)</li>
          <li>🔗 File-based Routing</li>
          <li>🎯 Built-in API Routes</li>
          <li>📷 Image Optimization</li>
          <li>💅 Styling with Tailwind, CSS Modules, Sass</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-2">Why Choose Next.js?</h3>
        <ul className="text-left  text-gray-600">
          <li> ✅ Better performance with SSR & SSG </li>
          <li>✅ SEO-friendly out of the box </li>
          <li>✅ Cleaner code with file-based routing</li>
          <li>✅ Great developer experience with TypeScript, ESLint, and Fast Refresh</li>
          <li>✅ Ready for production with minimal config</li>
        </ul>
      </section>
    </div>

  );
}

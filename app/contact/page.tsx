
import Image from 'next/image';

export default function contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
      <main className="flex flex-col gap-8 items-center text-center">
      
          
            <Image
              className="dark:invert"
              src="/logo.jpg"
              alt="logo"
              width={180}
              height={38}
              priority
            />
        

        <h1 className="font-mono text-sm/6 sm:text-left">
          Welcome to Bright Stars Nursery & Primary school, Wankulukuku- Kabowa
        </h1>
        
        <nav className="flex items-center gap-4">
          <a href="/home" className="text-blue-500 hover:underline">
            Home
          </a>
          <a href="/about-us" className="text-blue-500 hover:underline">
            About Us
          </a>
          <a href="/" className="text-blue-500 hover:underline">
            Contact
          </a>
        </nav>

        <section className="mt-8 text-center">
          <h2 className="text-2xl font-bold">Welcome to Bright Stars Primary School</h2>
          <p className="mt-2 text-lg">Your journey to excellence in education starts here.</p>
        </section>
      </main>

      <footer className="mt-8 text-sm text-gray-500 text-center">
        <p>&copy; {new Date().getFullYear()} Bright Stars Nursery & Primary School</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}
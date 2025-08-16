import Link from 'next/link';

export default function Home() {
  return (
    <>
      <nav>
        <Link href="/">Home</Link> |{' '}
        <Link href="/about-us">About Us</Link> |{' '}
        <Link href="/academics">Academics</Link> |{' '}
        <Link href="/admissions">Admissions</Link> |{' '}
        <Link href="/news-events">News & Events</Link> |{' '}
        <Link href="/gallery">Gallery</Link> |{' '}
        <Link href="/contact-us">Contact Us</Link>
      </nav>

      <main>
        <h1>Welcome to Bright Stars Primary School</h1>
        <p>Your journey to excellence in education starts here.</p>
      </main>
    </>
  );
}
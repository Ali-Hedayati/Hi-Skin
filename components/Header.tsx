export default function Header() {
    return (
      <header className="bg-primary text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-lg font-bold">Beauty Salon</h1>
          <ul className="flex gap-4">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blogs">Blogs</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
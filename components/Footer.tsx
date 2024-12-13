export default function Footer() {
    return (
      <footer className="bg-secondary text-white p-4 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Beauty Salon. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
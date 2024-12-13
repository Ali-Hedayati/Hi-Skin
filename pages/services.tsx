import SEO from '../components/SEO';

export default function ServicesPage() {
  return (
    <>
      <SEO title="Our Services - Beauty Salon" description="Discover the range of beauty services we offer." />
      <h1 className="text-4xl text-primary font-bold">Our Services</h1>
      <ul className="mt-4">
        <li>Hair Styling</li>
        <li>Manicure & Pedicure</li>
        <li>Facial Treatments</li>
      </ul>
    </>
  );
}

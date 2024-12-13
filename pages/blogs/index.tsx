import SEO from '../../components/SEO';

export default function BlogsPage() {
  return (
    <>
      <SEO title="Blogs - Beauty Salon" description="Read the latest beauty tips and news." />
      <h1 className="text-4xl text-primary font-bold">Blogs</h1>
      <ul className="mt-4">
        <li><a href="/blogs/the-best-hair-care-tips">The Best Hair Care Tips</a></li>
        <li><a href="/blogs/choosing-the-right-skincare-products">How to Choose the Right Skincare Products</a></li>
      </ul>
    </>
  );
}

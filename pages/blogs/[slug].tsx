import { useRouter } from 'next/router';
import SEO from '../../components/SEO';

export default function BlogPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <SEO title={`Blog - ${slug}`} description={`Read about ${slug}.`} />
      <h1 className="text-4xl text-primary font-bold">Blog: {slug}</h1>
      <p className="mt-4">Content for the blog post will go here.</p>
    </>
  );
}

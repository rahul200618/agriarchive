import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Agri Archives - An International Monthly Agriculture E-Magazine</title>
        <meta
          name="description"
          content="Agri Archives E-Magazine aims to serve as a comprehensive digital platform dedicated to agriculture and allied sciences."
        />
        <meta name="keywords" content="agriculture e-magazine, agricultural archives, agri archives, publish agricultural articles, sustainable farming, agri-innovation" />
        <link rel="canonical" href="https://agriarchives.in" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Periodical",
            "name": "Agri Archives",
            "description": "An International Monthly Agriculture E-Magazine dedicated to agriculture and allied sciences.",
            "url": "https://agriarchives.in",
            "publisher": {
              "@type": "Organization",
              "name": "Agri Archives"
            },
            "issn": ""
          })}
        </script>
      </Helmet>
      <Layout>
        <HeroSection />
        <AboutSection />
      </Layout>
    </>
  );
};

export default Index;

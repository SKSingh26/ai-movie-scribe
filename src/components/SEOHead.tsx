import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  keywords?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  image = '/og-default.jpg', 
  url = window.location.href,
  type = 'website',
  keywords
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) ||
                 document.querySelector(`meta[property="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          (meta as HTMLMetaElement).setAttribute('property', name);
        } else {
          (meta as HTMLMetaElement).setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      (meta as HTMLMetaElement).setAttribute('content', content);
    };

    // Basic SEO
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);

    // Open Graph
    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:image', image);
    updateMeta('og:url', url);
    updateMeta('og:type', type);
    updateMeta('og:site_name', 'AI Movie Scribe');

    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

    // Cleanup function to avoid memory leaks
    return () => {
      // We don't remove meta tags on cleanup as they should persist
    };
  }, [title, description, image, url, type, keywords]);

  return null; // This component doesn't render anything
};

export default SEOHead;
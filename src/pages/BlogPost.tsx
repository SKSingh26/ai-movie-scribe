import { useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, Tag, Share2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdBannerPlaceholder from '@/components/AdBannerPlaceholder';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog post data - replace with actual MDX/CMS integration
  const blogPosts: Record<string, any> = {
    'the-future-of-ai-in-filmmaking': {
      title: 'The Future of AI in Filmmaking: A Revolutionary Transformation',
      excerpt: 'Exploring how artificial intelligence is reshaping the movie industry, from script writing to visual effects and beyond.',
      content: `
        <p>Artificial Intelligence is fundamentally transforming the film industry in ways we never imagined possible. From automated script analysis to revolutionary visual effects, AI is becoming an indispensable tool for filmmakers worldwide.</p>

        <h2>Script Writing and Story Development</h2>
        <p>AI-powered tools are now capable of analyzing thousands of successful scripts to identify patterns, predict audience engagement, and even suggest plot improvements. Companies like ScriptBook and Vault AI are leading this revolution.</p>

        <h2>Visual Effects and Post-Production</h2>
        <p>The integration of AI in VFX has dramatically reduced production time and costs. Tools like NVIDIA's AI-powered rendering and deepfake technology are creating possibilities that were previously impossible or prohibitively expensive.</p>

        <h2>Casting and Performance Analysis</h2>
        <p>AI algorithms can now analyze actor performances, predict box office success based on casting choices, and even create digital doubles that are indistinguishable from real actors.</p>

        <h2>The Future Ahead</h2>
        <p>As AI technology continues to evolve, we can expect even more dramatic changes in how movies are conceived, produced, and distributed. The question isn't whether AI will transform filmmaking, but how quickly the industry will adapt to these changes.</p>
      `,
      date: '2024-07-15',
      readTime: '8 min read',
      tags: ['AI', 'Technology', 'Filmmaking'],
      image: 'https://images.unsplash.com/photo-1489599512549-9c8b0c67dfdb',
      author: 'AI Movie Scribe'
    },
    'oscar-predictions-2024-analysis': {
      title: 'Oscar Predictions 2024: An AI-Powered Analysis',
      excerpt: 'Using machine learning to predict this year\'s Academy Award winners based on historical data and trends.',
      content: `
        <p>Using advanced machine learning algorithms and historical Academy Award data, we've developed a predictive model that analyzes multiple factors to forecast the 2024 Oscar winners.</p>

        <h2>Methodology</h2>
        <p>Our AI model considers over 50 variables including box office performance, critical reception, previous award wins, genre preferences, and historical voting patterns.</p>

        <h2>Best Picture Predictions</h2>
        <p>Based on our analysis, the frontrunners for Best Picture show interesting patterns that align with Academy preferences for dramatic narratives with social impact.</p>

        <h2>Acting Categories</h2>
        <p>The acting categories present some surprises this year, with our model identifying several dark horse candidates based on performance metrics and critical acclaim patterns.</p>
      `,
      date: '2024-07-12',
      readTime: '6 min read',
      tags: ['Oscars', 'Predictions', 'Analysis'],
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1',
      author: 'AI Movie Scribe'
    }
  };

  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = Object.entries(blogPosts)
    .filter(([postSlug]) => postSlug !== slug)
    .slice(0, 2)
    .map(([postSlug, postData]) => ({
      slug: postSlug,
      ...postData
    }));

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${post.title} - AI Movie Scribe`}
        description={post.excerpt}
        image={post.image}
        type="article"
        keywords={post.tags.join(', ')}
      />
      
      <Navbar />
      
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Header */}
          <article className="mb-12">
            <header className="mb-8">
              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>

              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
                {post.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex items-center gap-2 flex-wrap mb-6">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {post.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Featured Image */}
              {post.image && (
                <div className="aspect-video overflow-hidden rounded-lg mb-8">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </header>

            {/* Ad Banner */}
            <div className="flex justify-center mb-8">
              <AdBannerPlaceholder size="leaderboard" />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Bottom Ad */}
            <div className="flex justify-center mt-12">
              <AdBannerPlaceholder size="rectangle" />
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="group bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
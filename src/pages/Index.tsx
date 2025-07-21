import { Link } from 'react-router-dom';
import { ArrowRight, Star, Calendar, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import AdBannerPlaceholder from '@/components/AdBannerPlaceholder';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  // Sample blog posts - replace with actual data
  const featuredPosts = [
    {
      slug: 'the-future-of-ai-in-filmmaking',
      title: 'The Future of AI in Filmmaking: A Revolutionary Transformation',
      excerpt: 'Exploring how artificial intelligence is reshaping the movie industry, from script writing to visual effects and beyond.',
      date: '2024-07-15',
      readTime: '8 min read',
      tags: ['AI', 'Technology', 'Filmmaking'],
      image: 'https://images.unsplash.com/photo-1489599512549-9c8b0c67dfdb'
    },
    {
      slug: 'oscar-predictions-2024-analysis',
      title: 'Oscar Predictions 2024: An AI-Powered Analysis',
      excerpt: 'Using machine learning to predict this year\'s Academy Award winners based on historical data and trends.',
      date: '2024-07-12',
      readTime: '6 min read',
      tags: ['Oscars', 'Predictions', 'Analysis'],
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1'
    },
    {
      slug: 'box-office-trends-summer-2024',
      title: 'Box Office Trends: What Summer 2024 Taught Us',
      excerpt: 'Analyzing the summer blockbuster season and what it reveals about changing audience preferences.',
      date: '2024-07-10',
      readTime: '5 min read',
      tags: ['Box Office', 'Trends', 'Summer'],
      image: 'https://images.unsplash.com/photo-1489599512549-9c8b0c67dfdb'
    }
  ];

  const stats = [
    { icon: Star, value: '500+', label: 'Movie Reviews' },
    { icon: Calendar, value: '50+', label: 'Weekly Posts' },
    { icon: TrendingUp, value: '10K+', label: 'Monthly Readers' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="AI Movie Scribe - Your Guide to Cinema Intelligence"
        description="Discover the latest in cinema through AI-powered insights, reviews, and analysis. Explore movie trends, predictions, and behind-the-scenes stories."
        keywords="movies, film, AI, cinema, reviews, box office, predictions"
      />
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
                Where <span className="text-primary">AI</span> Meets Cinema
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover the future of film through artificial intelligence. Get insights, predictions, 
                and deep analysis of your favorite movies and emerging cinema trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/blog">
                    Explore Articles <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card border-border text-center">
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ad Banner */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <AdBannerPlaceholder size="leaderboard" />
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Featured Articles
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dive into our latest AI-powered insights about movies, trends, and the future of cinema.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/blog">
                  View All Articles <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

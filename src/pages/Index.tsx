import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Calendar, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import TrendingWidget from '@/components/TrendingWidget';
import CategoryFilter from '@/components/CategoryFilter';
import AdBannerPlaceholder from '@/components/AdBannerPlaceholder';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Sample blog posts - replace with actual data
  const allPosts = [
    {
      slug: 'the-future-of-ai-in-filmmaking',
      title: 'The Future of AI in Filmmaking: A Revolutionary Transformation',
      excerpt: 'Exploring how artificial intelligence is reshaping the movie industry, from script writing to visual effects and beyond.',
      date: '2024-07-15',
      readTime: '8 min read',
      tags: ['WWII', 'Technology', 'Filmmaking'],
      image: 'https://images.unsplash.com/photo-1489599512549-9c8b0c67dfdb'
    },
    {
      slug: 'oscar-predictions-2024-analysis',
      title: 'Oscar Predictions 2024: An AI-Powered Analysis',
      excerpt: 'Using machine learning to predict this year\'s Academy Award winners based on historical data and trends.',
      date: '2024-07-12',
      readTime: '6 min read',
      tags: ['Dark Comedy', 'Predictions', 'Analysis'],
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1'
    },
    {
      slug: 'box-office-trends-summer-2024',
      title: 'Box Office Trends: What Summer 2024 Taught Us',
      excerpt: 'Analyzing the summer blockbuster season and what it reveals about changing audience preferences.',
      date: '2024-07-10',
      readTime: '5 min read',
      tags: ['Afterlife', 'Trends', 'Summer'],
      image: 'https://images.unsplash.com/photo-1489599512549-9c8b0c67dfdb'
    },
    {
      slug: 'streaming-wars-2024',
      title: 'The Streaming Wars: Who\'s Winning in 2024?',
      excerpt: 'A comprehensive analysis of the current streaming landscape and market dominance.',
      date: '2024-07-08',
      readTime: '7 min read',
      tags: ['WWII', 'Netflix', 'Disney+'],
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37'
    },
    {
      slug: 'indie-films-rise-2024',
      title: 'The Rise of Independent Cinema in the Digital Age',
      excerpt: 'How indie filmmakers are leveraging technology to compete with major studios.',
      date: '2024-07-05',
      readTime: '9 min read',
      tags: ['Dark Comedy', 'Cinema', 'Digital'],
      image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9'
    },
    {
      slug: 'horror-renaissance-analysis',
      title: 'The Horror Renaissance: Why Scary Movies Are Back',
      excerpt: 'Examining the resurgence of horror films and their cultural impact in modern cinema.',
      date: '2024-07-03',
      readTime: '6 min read',
      tags: ['Horror', 'Afterlife', 'Culture'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96'
    }
  ];

  const featuredPost = allPosts[0];
  const categories = Array.from(new Set(allPosts.flatMap(post => post.tags)));
  
  const filteredPosts = selectedCategory 
    ? allPosts.filter(post => post.tags.includes(selectedCategory))
    : allPosts;

  const stats = [
    { icon: Star, value: '500+', label: 'Movie Reviews' },
    { icon: Calendar, value: '50+', label: 'Weekly Posts' },
    { icon: TrendingUp, value: '10K+', label: 'Monthly Readers' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Elirome - Find Your Perfect Movie"
        description="Helping people find the perfect movie for their mood through AI-powered insights and analysis from Reddit, Instagram, and more."
        keywords="movies, film, AI, cinema, reviews, box office, mood-based recommendations"
      />
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
                Find Your Perfect Movie
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Helping people discover movies that match their mood through AI-powered insights from social media and data analysis.
              </p>
              <Button asChild size="lg">
                <Link to="/blog">
                  Explore Reviews <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Article Section */}
        <section className="py-8 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex gap-2 mb-3">
                    {featuredPost.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-bold text-xl mb-3 text-foreground">
                    <Link to={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="text-sm text-muted-foreground">
                    By Elirome • {featuredPost.date} • {featuredPost.readTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content - Two Column Layout */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Blog Feed */}
              <div className="lg:col-span-2">
                {/* Category Filters */}
                <CategoryFilter 
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />

                {/* Ad Banner */}
                <div className="mb-8">
                  <AdBannerPlaceholder size="leaderboard" />
                </div>

                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredPosts.slice(1).map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Button asChild variant="outline">
                    <Link to="/blog">
                      View All Articles <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <TrendingWidget />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import AdBannerPlaceholder from '@/components/AdBannerPlaceholder';
import SEOHead from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Sample blog posts - replace with actual data
  const allPosts = [
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
    },
    {
      slug: 'streaming-wars-2024',
      title: 'The Streaming Wars: Who\'s Winning in 2024?',
      excerpt: 'A comprehensive analysis of the current streaming landscape and market dominance.',
      date: '2024-07-08',
      readTime: '7 min read',
      tags: ['Streaming', 'Netflix', 'Disney+'],
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37'
    },
    {
      slug: 'indie-films-rise-2024',
      title: 'The Rise of Independent Cinema in the Digital Age',
      excerpt: 'How indie filmmakers are leveraging technology to compete with major studios.',
      date: '2024-07-05',
      readTime: '9 min read',
      tags: ['Independent', 'Cinema', 'Digital'],
      image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9'
    },
    {
      slug: 'horror-renaissance-analysis',
      title: 'The Horror Renaissance: Why Scary Movies Are Back',
      excerpt: 'Examining the resurgence of horror films and their cultural impact in modern cinema.',
      date: '2024-07-03',
      readTime: '6 min read',
      tags: ['Horror', 'Renaissance', 'Culture'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96'
    }
  ];

  const allTags = Array.from(new Set(allPosts.flatMap(post => post.tags)));

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Blog - AI Movie Scribe"
        description="Explore our collection of AI-powered movie insights, reviews, and cinema analysis. Stay updated with the latest trends in film and entertainment."
        keywords="movie blog, film analysis, cinema insights, AI reviews, box office predictions"
      />
      
      <Navbar />
      
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-4">
              Movie Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover AI-powered insights, reviews, and analysis of movies, trends, and the future of cinema.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={!selectedTag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag('')}
              >
                All
              </Button>
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Ad Banner */}
          <div className="flex justify-center mb-12">
            <AdBannerPlaceholder size="leaderboard" />
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
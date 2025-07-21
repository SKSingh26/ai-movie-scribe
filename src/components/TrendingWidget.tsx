import { Link } from 'react-router-dom';
import { TrendingUp, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TrendingWidget = () => {
  const trendingPosts = [
    {
      slug: 'the-future-of-ai-in-filmmaking',
      title: 'The Future of AI in Filmmaking',
      readTime: '8 min read',
      views: '12.5K'
    },
    {
      slug: 'oscar-predictions-2024-analysis', 
      title: 'Oscar Predictions 2024',
      readTime: '6 min read',
      views: '8.2K'
    },
    {
      slug: 'box-office-trends-summer-2024',
      title: 'Box Office Trends Summer 2024',
      readTime: '5 min read',
      views: '6.8K'
    },
    {
      slug: 'streaming-wars-2024',
      title: 'The Streaming Wars',
      readTime: '7 min read',
      views: '5.4K'
    },
    {
      slug: 'indie-films-rise-2024',
      title: 'Rise of Independent Cinema',
      readTime: '9 min read',
      views: '4.9K'
    }
  ];

  const latestPosts = [
    {
      slug: 'horror-renaissance-analysis',
      title: 'The Horror Renaissance',
      date: '2024-07-03',
      readTime: '6 min read'
    },
    {
      slug: 'indie-films-rise-2024',
      title: 'Rise of Independent Cinema',
      date: '2024-07-05',
      readTime: '9 min read'
    },
    {
      slug: 'streaming-wars-2024',
      title: 'The Streaming Wars',
      date: '2024-07-08',
      readTime: '7 min read'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Trending Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
            Trending
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {trendingPosts.map((post, index) => (
            <div key={post.slug} className="flex items-start gap-3">
              <span className="text-2xl font-bold text-muted-foreground">
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <Link 
                  to={`/blog/${post.slug}`}
                  className="font-medium text-sm hover:text-primary transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Latest Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Latest</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {latestPosts.map((post) => (
            <div key={post.slug}>
              <Link 
                to={`/blog/${post.slug}`}
                className="font-medium text-sm hover:text-primary transition-colors line-clamp-2 block"
              >
                {post.title}
              </Link>
              <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendingWidget;
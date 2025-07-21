import { Award, Brain, Zap, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Using advanced machine learning algorithms to analyze movie trends, box office data, and audience preferences.'
    },
    {
      icon: Award,
      title: 'Expert Insights',
      description: 'Combining artificial intelligence with deep cinema knowledge to provide unique perspectives on films and industry trends.'
    },
    {
      icon: Zap,
      title: 'Real-Time Data',
      description: 'Leveraging real-time box office data, social media sentiment, and industry news to deliver up-to-date insights.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building a community of movie enthusiasts who appreciate data-driven insights and intelligent film analysis.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="About - Elirome"
        description="Learn about Elirome's mission to help people find the perfect movie for their mood through AI-powered insights and social media analysis."
        keywords="about Elirome, movie recommendations, mood-based movies, AI movie discovery"
      />
      
      <Navbar />
      
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">
              About Elirome
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Helping people find the perfect movie for their mood through AI-powered insights 
              and data from Reddit, Instagram, and other social platforms.
            </p>
          </div>

          {/* Mission Statement */}
          <section className="mb-16">
            <Card className="bg-card border-border p-8">
              <CardContent className="p-0">
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Elirome, we understand that choosing the right movie can make or break your evening. 
                  Our mission is simple: help people discover films that perfectly match their current mood 
                  and preferences. Using artificial intelligence and data gathered from Reddit, Instagram, 
                  and other social platforms, we analyze movie discussions, reviews, and sentiment to provide 
                  personalized recommendations that truly resonate.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* What We Do */}
          <section className="mb-16">
            <h2 className="font-heading font-bold text-3xl text-foreground text-center mb-12">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <feature.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technology Section */}
          <section className="mb-16">
            <h2 className="font-heading font-bold text-3xl text-foreground text-center mb-8">
              Our Approach
            </h2>
            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground">
              <p>
                We combine cutting-edge artificial intelligence with deep domain expertise in film and entertainment. 
                Our AI models analyze vast datasets including box office performance, critical reception, social media 
                sentiment, historical trends, and industry patterns to generate insights that would be impossible for 
                human analysts to uncover manually.
              </p>
              
              <h3>Data Sources</h3>
              <ul>
                <li>Real-time box office data from major markets worldwide</li>
                <li>Critical reviews and ratings from professional and user sources</li>
                <li>Social media sentiment analysis and trending discussions</li>
                <li>Historical performance data spanning decades of cinema</li>
                <li>Industry reports and trade publication insights</li>
              </ul>

              <h3>Analysis Methods</h3>
              <ul>
                <li>Machine learning algorithms for pattern recognition</li>
                <li>Natural language processing for content analysis</li>
                <li>Predictive modeling for box office and awards forecasting</li>
                <li>Sentiment analysis for audience reception tracking</li>
                <li>Statistical analysis for trend identification</li>
              </ul>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <Card className="bg-gradient-card border-border p-8">
              <CardContent className="p-0">
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  Join Our Community
                </h2>
                <p className="text-muted-foreground mb-6">
                  Interested in collaborating or have questions about our methodology? 
                  We'd love to hear from fellow movie enthusiasts and industry professionals.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
                >
                  Get In Touch
                </a>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
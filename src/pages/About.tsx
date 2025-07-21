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
      description:
        'Using smart automation to identify movie trends, patterns, and audience moods across the web.'
    },
    {
      icon: Award,
      title: 'Expert Insights',
      description:
        'Combining machine learning with editorial judgment to surface meaningful recommendations.'
    },
    {
      icon: Zap,
      title: 'Real-Time Data',
      description:
        'Tracking discussions, sentiment, and industry buzz from Reddit, social platforms, and beyond.'
    },
    {
      icon: Users,
      title: 'Community Signals',
      description:
        'Tapping into viewer communities to understand what resonates, why, and when.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About - Elirome"
        description="Learn how Elirome helps you find the perfect movie for your mood by blending AI tools with real-time social insight."
        keywords="about Elirome, movie recommendations, mood-based movies, intelligent movie curation"
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
              Elirome is a modern platform dedicated to simplifying how you choose movies.
              Blending human-curated insight with intelligent automation, we help you discover 
              films that align with your mood, interests, and what’s trending across platforms like Reddit and beyond.
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
                  Our mission is to connect viewers with the right stories at the right time. 
                  Whether you're overwhelmed by choices or unsure what suits your current mood, 
                  Elirome offers curated suggestions based on real-time community discussions, trends, 
                  and viewer sentiment. We don’t just rely on AI — we combine technology with editorial understanding 
                  to deliver suggestions that feel personal, timely, and trustworthy.
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
                We use a blend of data science, sentiment tracking, and editorial thinking to help surface 
                movie suggestions that match how people are feeling — not just what’s popular. Whether it's a 
                nostalgic comfort film, a gritty thriller, or a cathartic drama, Elirome maps stories to emotions.
              </p>

              <h3>Data Sources</h3>
              <ul>
                <li>Box office reports and performance trends</li>
                <li>Public ratings and critic reviews</li>
                <li>Reddit and social media conversations</li>
                <li>Historical genre data and seasonality</li>
                <li>Sentiment signals from community discussions</li>
              </ul>

              <h3>Analysis Methods</h3>
              <ul>
                <li>Pattern detection from trending topics</li>
                <li>Natural language processing (NLP) of reviews</li>
                <li>Contextual keyword extraction</li>
                <li>Real-time engagement monitoring</li>
                <li>Topic clustering and emotional tagging</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

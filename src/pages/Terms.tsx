import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Terms of Service - AI Movie Scribe"
        description="Terms of Service for AI Movie Scribe. Learn about the terms and conditions for using our website and services."
      />
      
      <Navbar />
      
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="font-heading font-bold text-4xl text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground">
            <p className="text-sm text-muted-foreground">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using AI Movie Scribe, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on AI Movie Scribe's 
              website for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2>User Content</h2>
            <p>
              By submitting content to our website (comments, feedback, etc.), you grant us a 
              non-exclusive, royalty-free, perpetual license to use, modify, and display such content.
            </p>

            <h2>Prohibited Uses</h2>
            <p>You may not use our website:</p>
            <ul>
              <li>For any unlawful purpose or to solicit others to unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>

            <h2>Disclaimer</h2>
            <p>
              The materials on AI Movie Scribe's website are provided on an 'as is' basis. AI Movie Scribe 
              makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
              including without limitation, implied warranties or conditions of merchantability, fitness for 
              a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>Limitations</h2>
            <p>
              In no event shall AI Movie Scribe or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the materials on AI Movie Scribe's website.
            </p>

            <h2>Accuracy of Materials</h2>
            <p>
              The materials appearing on AI Movie Scribe's website could include technical, typographical, 
              or photographic errors. AI Movie Scribe does not warrant that any of the materials on its 
              website are accurate, complete, or current.
            </p>

            <h2>Links</h2>
            <p>
              AI Movie Scribe has not reviewed all of the sites linked to our website and is not responsible 
              for the contents of any such linked site. The inclusion of any link does not imply endorsement 
              by AI Movie Scribe of the site.
            </p>

            <h2>Modifications</h2>
            <p>
              AI Movie Scribe may revise these terms of service for its website at any time without notice. 
              By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of 
              California, United States, and you irrevocably submit to the exclusive jurisdiction of the 
              courts in that state or location.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <ul>
              <li>Email: legal@aimoviescribe.com</li>
              <li>Contact form: <a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
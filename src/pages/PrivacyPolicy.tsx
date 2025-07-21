import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Privacy Policy - AI Movie Scribe"
        description="Privacy Policy for AI Movie Scribe. Learn how we collect, use, and protect your personal information."
      />
      
      <Navbar />
      
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="font-heading font-bold text-4xl text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground">
            <p className="text-sm text-muted-foreground">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2>Introduction</h2>
            <p>
              At AI Movie Scribe, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <ul>
              <li>Contact information when you reach out to us</li>
              <li>Comments and feedback you provide</li>
              <li>Email addresses for newsletter subscriptions</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <ul>
              <li>Log data including IP addresses, browser type, and pages visited</li>
              <li>Device information and operating system details</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our website</li>
              <li>Improve our content and user experience</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send newsletters and updates (with your consent)</li>
              <li>Analyze website usage and trends</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              except as described in this policy. We may share information with:
            </p>
            <ul>
              <li>Service providers who assist in website operation</li>
              <li>Legal authorities when required by law</li>
              <li>Third parties in case of business transfers</li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your browsing experience. 
              You can control cookie preferences through your browser settings.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites or integrate with third-party services. 
              We are not responsible for the privacy practices of these external services.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your personal information</li>
              <li>Object to processing of your information</li>
              <li>Data portability</li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page with an updated "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@aimoviescribe.com</li>
              <li>Contact form: <a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
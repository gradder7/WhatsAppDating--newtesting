import Link from 'next/link';

// const PolicyLink = ({ href, text }) => (
//   <Link href={href}>
//     <a className="text-blue-500 hover:underline">{text}</a>
//   </Link>
// );

interface PolicyLinkProps {
  href: string;
  text: string;
}

const PolicyLink: React.FC<PolicyLinkProps> = ({ href, text }) => (
  <Link href={href}>
    <h1 className="text-blue-500 hover:underline">{text}</h1>
  </Link>
);
const PrivacyPolicy = () => (
  <div className="container mx-auto py-8">
    <div className="grid grid-cols-1 md:grid-cols-3">
      {/* Sidebar navigation */}
      <div className="md:col-span-1">
        <nav className="sticky top-16">
          <ul className="space-y-4">
            <li>
              <PolicyLink href="#intro" text="Introduction" />
            </li>
            <li>
              <PolicyLink href="#data-collection" text="Data Collection" />
            </li>
            <li>
              <PolicyLink href="#cookies" text="Cookies" />
            </li>
            <li>
              <PolicyLink
                href="#use-of-information"
                text="Use of Information"
              />
            </li>
            <li>
              <PolicyLink href="#data-security" text="Data Security" />
            </li>
          </ul>
        </nav>
      </div>
      {/* Main content */}
      <div className="md:col-span-2">
        <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>

        <section id="intro" className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Introduction</h2>
          <p>
            Our website is committed to protecting the privacy and security of
            its personal information. This Privacy Policy explains how we
            collect, use, and safeguard the personal information provided to us
            through the website.
          </p>
        </section>

        <section id="data-collection" className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Data Collection</h2>
          <p>
            We collect personal information from our users when they voluntarily
            provide it to us through the website, such as when they register for
            an account or sign up for our newsletter. This personal information
            may include their name, email address, and other contact
            information.
          </p>
        </section>

        <section id="cookies" className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Cookies</h2>
          <p>
            Our website uses cookies to enhance the user experience and provide
            personalized content and advertising. Cookies are small data files
            that are placed on a device when they visit our website. Users can
            control the use of cookies through their browser settings.
          </p>
        </section>

        <section id="use-of-information" className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Use of Information</h2>
          <p>
            We use the personal information provided to us by our users to
            provide and improve our services, to communicate with our users, and
            to personalize the content and advertising on our website.
          </p>
        </section>

        <section id="data-security" className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Data Security</h2>
          <p>
            We take appropriate measures to safeguard the personal information
            provided to us by our users and protect it from unauthorized access
            or disclosure. However, no data transmission over the internet can
            be guaranteed to be 100% secure, and we cannot guarantee the
            security of any information transmitted to or from our website.
          </p>
        </section>
      </div>
    </div>
  </div>
);
export default PrivacyPolicy;

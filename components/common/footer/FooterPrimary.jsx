import Link from 'next/link';

export default function FooterPrimary() {
  return (
    <div className="container footer-primary-inner">
      <nav className="footer-nav">
        <ul>
          <li>
            <Link href="/" title="Information">
              Information
            </Link>
          </li>

          <li>
            <Link href="/" title="Contact Us">
              Contact Us
            </Link>
          </li>

          <li>
            <Link href="/" title="Track My Order">
              Track My Order
            </Link>
          </li>

          <li>
            <Link href="/" title="Shipping">
              Shipping
            </Link>
          </li>

          <li>
            <Link href="/" title="Free Returns">
              Free Returns
            </Link>
          </li>

          <li>
            <Link href="/" title="My Account">
              My Account
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Services">
              Services
            </Link>
          </li>

          <li>
            <Link href="/" title="Ship to Store">
              Ship to Store
            </Link>
          </li>

          <li>
            <Link href="/" title="Gift Card">
              Gift Card
            </Link>
          </li>

          <li>
            <Link href="/" title="Online Only">
              Online Only
            </Link>
          </li>

          <li>
            <Link href="/" title="Tips & Tricks">
              Tips & Tricks
            </Link>
          </li>

          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Loyalty Programs">
              Loyalty Programs
            </Link>
          </li>

          <li>
            <Link href="/" title="Sign up to the Simons">
              Sign up to the Simons
            </Link>
          </li>

          <li>
            <Link href="/" title="My Account">
              My Account
            </Link>
          </li>

          <li>
            <Link href="/" title="Conditions">
              Conditions
            </Link>
          </li>

          <li>
            <Link href="/" title="FAQ">
              FAQ
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Careers">
              Careers
            </Link>
          </li>

          <li>
            <Link href="/" title="About Us">
              About Us
            </Link>
          </li>

          <li>
            <Link href="/" title="Our Story">
              Our Story
            </Link>
          </li>

          <li>
            <Link href="/" title="Art & Culture">
              Art & Culture
            </Link>
          </li>

          <li>
            <Link href="/" title="Our Private Labels">
              Our Private Labels
            </Link>
          </li>

          <li>
            <Link href="/" title="Stores">
              Stores
            </Link>
          </li>
        </ul>
      </nav>

      <div className="footer-wrapper">
        <nav className="footer-support">
          <ul>
            <li>
              <a href="tel:+07123456" title="Call us">
                <i className="fa-solid fa-phone"></i>
                Support
              </a>
            </li>

            <li>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat"
              >
                <i className="fa-regular fa-comments"></i>
                Chat
              </a>
            </li>

            <li>
              <a href="mailto:office@thread-affair.com">
                <i className="fa-solid fa-envelope-open-text"></i>
                Email
              </a>
            </li>
          </ul>
        </nav>

        <section className="footer-contact">
          <h1>
            <span>Thread Affair</span> Milano
          </h1>

          <p>
            Largo Augusto 3, Milano, 20122, Milano, IT
            <a href="tel:0039 02 760 003 66" title="Call us">
              Tel: 0039 02 760 003 66
            </a>
            <a href="mailto:" title="Email us">
              office@thread-affair.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

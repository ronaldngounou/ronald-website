// app/layout.js
import './globals.css'; // Import global CSS
import Link from 'next/link';

// Metadata for the website
export const metadata = {
  title: 'Ronald Ngounou',
  description: 'A showcase of my work',
};

// Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/research">Research</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer>
          <p>© 2024 Your Name. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

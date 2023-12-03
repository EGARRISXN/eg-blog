import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import AuthProvider from '@/context/AuthProvider';
import { ThemeProvider } from '@/context/ThemeContext';
import ClientThemeWrapper from '@/context/ClientThemeWrapper';
import NavBar from '@/components/NavBar';

export const metadata = {
  title: 'eg-blog',
  description: 'My first go at a blog, along with some other things.',
  url: 'https://eg-blog.vercel.app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta
          name='google-site-verification'
          content='R4fSOIUhVxnQljOM1CHX58douELz931g6fPpZJ3Usyo'
        />
      </head>
      <body>
        <AuthProvider>
          <ThemeProvider>
            <ClientThemeWrapper>
              <NavBar />
              <main className='min-h-screen'>{children}</main>
            </ClientThemeWrapper>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/app/(utils)/ThemeContext';
import ClientThemeWrapper from '@/app/(utils)/ClientThemeWrapper';
import AuthProvider from '@/app/(utils)/AuthProvider';
import NavBar from '@/app/(components)//NavBar';

export const metadata = {
  title: 'eg-blog',
  description: 'My first go at a blog, along with some other things.',
  url: 'https://eg-blog.vercel.app',
};

export default async function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <meta
          name='google-site-verification'
          content='R4fSOIUhVxnQljOM1CHX58douELz931g6fPpZJ3Usyo'
        />
      </head>
      <body>
        <ThemeProvider>
          <ClientThemeWrapper>
            <AuthProvider>
              <main className='min-h-screen'>
                <NavBar />
                {children}
              </main>
            </AuthProvider>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

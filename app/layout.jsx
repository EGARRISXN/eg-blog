import { ThemeProvider } from '@/app/(utils)/context/ThemeContext';
import ClientThemeWrapper from '@/app/(utils)/context/ClientThemeWrapper';
import AuthProvider from '@/app/(utils)/context/AuthProvider';
import NavBar from '@/app/(components)//NavBar';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

export const metadata = {
  title: 'eg-blog',
  description: 'My first go at a blog, along with some other things.',
  url: 'https://eg-blog.vercel.app',
};

export default async function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${GeistSans.variable} ${GeistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <meta
          name='google-site-verification'
          content='R4fSOIUhVxnQljOM1CHX58douELz931g6fPpZJ3Usyo'
        />
      </head>
      <body className='flex min-h-full flex-col'>
        <ThemeProvider>
          <ClientThemeWrapper>
            <AuthProvider>
              <NavBar />
              <main className='min-h-screen grow'>{children}</main>
            </AuthProvider>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

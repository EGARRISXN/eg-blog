import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';
import DiscordProvider from 'next-auth/providers/discord';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/app/(utils)/db/createUser';
import bcrypt from 'bcrypt';

// import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
// import clientPromise from '@/app/(utils)/db/client';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      profile(profile) {
        console.log('Profile Github: ', profile);
        let userRole = 'Github User';
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          role: profile.role || userRole,
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        console.log('Google Profile : ', profile);
        let userRole = 'Google User';
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role || userRole,
        };
      },
    }),

    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: '2.0',
      profile(profile) {
        console.log('Twitter Profile: ', profile);
        const twitterData = profile.data;
        let userRole = 'Twitter User';
        return {
          id: twitterData.id,
          name: twitterData.name,
          email: null,
          image: twitterData.profile_image_url,
          role: twitterData.role || userRole,
        };
      },
    }),

    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      profile(profile) {
        console.log('Discord Profile: ', profile);
        let userRole = 'Discord User';
        return {
          id: profile.id,
          name: profile.username,
          email: profile.email,
          image: null,
          role: profile.role || userRole,
        };
      },
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email:',
          type: 'email',
          placeholder: 'Email',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials) {
        try {
          const foundUser = await User.findOne({ email: credentials.email })
            .lean()
            .exec();

          if (foundUser) {
            console.log('User Exists');
            const match = await bcrypt.compare(
              credentials.password,
              foundUser.password
            );

            if (match) {
              console.log('Good Password');
              delete foundUser.password;

              foundUser['role'] = 'User';

              if (credentials.email === 'egarrisxn@gmail.com') {
                foundUser.role = 'Admin';
              }

              return foundUser;
            }
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.role = user.role;
      }
      if (trigger === 'update' && session?.name) {
        token.name = session.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
    // adapter: MongoDBAdapter(clientPromise),
    // session: {
    //   strategy: 'jwt',
    // },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

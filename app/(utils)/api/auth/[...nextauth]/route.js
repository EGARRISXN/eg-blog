import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';
import DiscordProvider from 'next-auth/providers/discord';
// import TwitchProvider from 'next-auth/providers/twitch';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/app/(utils)//models/User';
import bcrypt from 'bcrypt';

export const authOptions = {
  providers: [
    GithubProvider({
      // profile(profile) {
      //   console.log('Profile Github: ', profile);

      //   let userRole = 'Github User';
      //   if (profile?.email === 'egarrisxn@gmail.com') {
      //     userRole = 'Admin';
      //   }

      //   return {
      //     ...profile,
      //     id: profile.id,
      //     role: userRole,
      //   };
      // },
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

    GoogleProvider({
      // profile(profile) {
      //   console.log('Google Profile : ', profile);

      //   let userRole = 'Google User';
      //   return {
      //     ...profile,
      //     id: profile.sub,
      //     role: userRole,
      //   };
      // },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    TwitterProvider({
      // profile(profile) {
      //   console.log('Twitter Profile: ', profile);

      //   const twitterData = profile.data;

      //   let userRole = 'Twitter User';
      //   return {
      //     ...twitterData,
      //     id: twitterData.id,
      //     role: userRole,
      //   };
      // },
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: '2.0',
    }),

    DiscordProvider({
      // profile(profile) {
      //   console.log('Discord Profile: ', profile);

      //   let userRole = 'Discord User';
      //   return {
      //     ...profile,
      //     id: profile.id,
      //     role: userRole,
      //   };
      // },
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),

    // TwitchProvider({
    //   clientId: process.env.TWITCH_CLIENT_ID,
    //   clientSecret: process.env.TWITCH_CLIENT_SECRET,
    // }),

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
              console.log('Good Pass');
              delete foundUser.password;

              foundUser['role'] = 'Unverified Email';

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
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

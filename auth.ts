import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import supabase from './db/supabase';
import type { NextAuthConfig } from 'next-auth';
import { compareSync } from 'bcryptjs';

export const config = {
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
  },

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  // Set up Adapter
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        if (credentials == null) return null;

        // Find user
        const { data: user } = await supabase
          .from('_users')
          .select('*')
          .eq('email', credentials.email)
          .single();

        if (!user) throw new Error('Incorrect email or password');

        const isMatch = compareSync(
          credentials.password as string,
          user.password
        );

        if (!isMatch) throw new Error('Incorrect email or password');

        // Return user object
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],

  callbacks: {
    async session({ session, user, trigger, token }: any) {
      // Attach user id to session
      if (token) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      if (trigger === 'update') {
        // Update session with user data
        session.user.name = user.name;
      }

      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

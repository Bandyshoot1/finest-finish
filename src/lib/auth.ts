import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// This is a simplified auth setup. In production, you'd want to:
// 1. Use a proper database for user storage
// 2. Implement proper password hashing
// 3. Add email verification
// 4. Consider using OAuth providers

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // In a real app, you'd query your database here
        const users = [
          {
            id: "1",
            email: "admin@sparkleclean.com",
            password: "admin123", // In production, store hashed passwords
            name: "Admin User",
            role: "admin",
          },
          {
            id: "2",
            email: "user@example.com",
            password: "user123",
            name: "Regular User",
            role: "user",
          },
        ];

        const user = users.find(
          (u) =>
            u.email === credentials?.email &&
            u.password === credentials?.password
        );

        if (user) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };

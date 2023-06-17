import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

console.log({
  clientId: process.env.VERCEL_URL,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
});

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.VERCEL_URL,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {},
});

export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  jwt: {
    encryption: true,
  },

  secret: process.env.JWT_SECRET,
  theme: {
    colorScheme: "dark", // "auto" | "dark" | "light"
    brandColor: "#fff", // Hex color code
    logo: "/google.png", // Absolute URL to image
    buttonText: "#ff0000", // Hex color code
  },

  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user && token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});

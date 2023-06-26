import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider  from 'next-auth/providers/credentials';
import User from "@/models/user";
import {connectToDB} from "@/utils/database"
const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
      },
      async authorize(credentials, req) {

        try {
          await connectToDB()
          const {email, password} = credentials as any;
  
          // Add logic here to look up the user from the credentials supplied
          //check if a user already exists
          const userExists = await User.findOne({
            email
          })
    
          if (userExists) {
            // Any object returned will be saved in `user` property of the JWT
            return userExists;
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        } catch (error) {
          
        }
      }
    })
  ],
  pages: {
    signIn: "/login"
  }
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}
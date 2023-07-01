import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
  {
    id: "1",
    name: "J Smith",
    email: "jsmith@example.com",
    username: "jsmith",
    password: "password1",
  },
  {
    id: "2",
    name: "John Doe",
    email: "johndoe@example.com",
    username: "johndoe",
    password: "password2",
  },
  {
    id: "3",
    name: "Admin",
    email: "admin@mail.com",
    username: "Admin Sate",
    password: "superadmin!",
  },
];

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials;

        const userEmail = users.find((user) => user.email === email);
        const userPassword = userEmail
          ? userEmail.password === password
          : false;

        if (userEmail === undefined) {
          throw new Error("Invalid Email");
        }

        if (userPassword === false) {
          throw new Error("Invalid password");
        }

        return userEmail;
      },
    }),
  ],
  pages: {
    signIn: "/admin/signin",
  },
};

export default NextAuth(authOptions);

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

        const user = users.find(
          (user) => user.email === email
          // && user.password === password
        );

        if (user === undefined) {
          throw new Error("Invalid Email");
        }
        if (user.password !== password) {
          throw new Error("Invalid Password");
        }
        // if (!user && user.email !== email) {
        //   throw new Error("Invalid Email");
        // }

        // if (!user && user.password !== password) {
        //   throw new Error("Invalid password");
        // }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/admin/signin",
  },
};

export default NextAuth(authOptions);

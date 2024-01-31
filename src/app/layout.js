import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav"
import { ClerkProvider, UserButton, auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import CreateProfile from "@/components/CreateProfile";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Social Media Assignment",
  description: "TE Assignment for Bootcamp",
};

const { userId } = auth();
  console.log(userId);
  // Fetch user profile from database
  const profileRes =
    await sql`SELECT * FROM sn_profiles WHERE clerk_user_id = ${userId}`;

    console.log(profileRes);

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <UserButton afterSignOutUrl="/" />
        <Nav/>

        {profileRes.rowCount !== 0 && children}
        
        {/*children*/}
        {profileRes.rowCount === 0 && <CreateProfile />}
      </body>
    </html>
    </ClerkProvider>
  );
}

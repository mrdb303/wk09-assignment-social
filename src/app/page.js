import { UserButton } from "@clerk/nextjs";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <>
    <div className="h-screen">
      <UserButton afterSignOutUrl="/"/>
    </div>
    <h2>Home Page</h2>
    </>
  );
}

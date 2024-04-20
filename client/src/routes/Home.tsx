import MessagesContainer from "@/components/MessagesContainer";
import Sidebar from "@/components/Sidebar";

function HomePage() {
  return (
    <main className="flex gap-5 w-full">
      <Sidebar className="hidden md:flex"/>
      <MessagesContainer/>
    </main>
  );
}

export default HomePage;

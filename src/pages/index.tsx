import { CreatePostButton, Main, Section, Sidebar } from "@/components/common";
import HotPost from "@/components/common/HotPost";
import Portfolio from "@/components/common/Portfolio";

function App() {
  return (
    <Main>
      <CreatePostButton />
      <Sidebar />
      <Section>
        <HotPost />
        <Portfolio />
      </Section>
    </Main>
  );
}

export default App;

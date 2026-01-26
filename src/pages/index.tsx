import { Main, Section, Sidebar } from "@/components/common";
import HotPost from "@/components/common/HotPost";
import Portfolio from "@/components/common/Portfolio";

function App() {
  return (
    <Main>
      <Sidebar />
      <Section>
        <HotPost />
        <Portfolio />
      </Section>
    </Main>
  );
}

export default App;

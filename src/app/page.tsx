import Page from "./components/Page";
import Container from "./components/Container";
export default function Home() {
  return (
    <Page>
      <Container>
        <h1 className="text-4xl font-bold text-center text-white">Hello Friend</h1>
        <p className="text-center text-white">This is a simple website that I made using Next.js and Tailwind CSS.</p>
      </Container>
    </Page>
  );
}

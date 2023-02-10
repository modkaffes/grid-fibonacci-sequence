import Grid from "./components/Grid";
import Nav from "./components/Nav";
import Description from "./components/Description";

export default function App() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <Nav />
      <main>
        <Description />
        <Grid />
      </main>
    </div>
  );
}

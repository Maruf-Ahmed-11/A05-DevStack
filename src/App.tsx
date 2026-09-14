import { Suspense } from "react";
import Hero from "./Components/Hero"
import Nav from "./Components/Nav"
import Tech from "./Components/Technologies/Tech";
import type { ITech } from "./Types/techType";
import Footer from "./Components/Footer";

const techFetch = async () : Promise<ITech[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}


function App() {
  const techPromise = techFetch();

  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<h2>Loading.........</h2>}>
        <Tech techPromise={techPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App

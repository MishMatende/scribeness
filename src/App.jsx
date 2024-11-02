import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="flex flex-col max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <HomePage />
      </section>
      <h1 className="text-green-400">Hello</h1>
      <footer></footer>
    </div>
  );
}

export default App;

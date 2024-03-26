import CoreConcepts from "./components/CoreConcepts.jsx";
import Example from "./components/Examples.jsx";
import Header from "./components/Header/Header.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Example />
      </main>
    </div>
  );
}

export default App;

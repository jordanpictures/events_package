import Packages from "./components/Packages";

const App = () => {
  return (
    <>
      <img src="/logo-2.png" alt="Jordan Picures" className="w-lg m-auto" />
      <h1 className="p-3 m-5 bg-gray-700 text-white text-3xl text-center font-bold rounded-lg">
        Event Packages
      </h1>
      <Packages />
    </>
  );
};

export default App;

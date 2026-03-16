import Packages from "./components/Packages";

const App = () => {
  return (
    <>
      <img
        src={`${import.meta.env.BASE_URL}logo-2.png`}
        alt="Jordan Picures"
        className="w-lg m-auto"
      />
      <br />
      <Packages />
    </>
  );
};

export default App;

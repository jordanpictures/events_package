import { useState } from "react";
import packages from "../data/packages";

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="flex flex-col items-center p-5">
      {packages.map((pkg) => (
        <button
          key={pkg.id}
          onClick={() => setSelectedPackage(pkg)}
          className="m-3 p-3 rounded-md w-full max-w-sm cursor-pointer bg-gray-700 hover:bg-gray-600 text-white text-lg hover:border-2 "
        >
          {pkg.name}
        </button>
      ))}

      {selectedPackage && (
        <div className="absolute top-0 left-0  w-full min-h-screen flex  flex-col justify-start gap-3 p-5 bg-gray-700">
          <button
            className="text-white text-xl font-serif p-2 cursor-pointer"
            onClick={() => setSelectedPackage(null)}
          >
            Close
          </button>
          {selectedPackage.images.map((img, i) => (
            <img key={i} src={img} alt="" className="w-full max-w-2xl m-auto" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Packages;

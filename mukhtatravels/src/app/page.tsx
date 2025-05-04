
export default function Home() {
  return (
    <>
      <div className="border border-red h-[32rem] bg-[url(/MukhtaSolutionsLogo.jpeg)] bg-contain bg-center bg-no-repeat">
        <section className="text-gray-600 ">
          <div className=" mx-auto flex px-5 pt-48 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className=" sm:text-4xl text-3xl mb-4 font-medium text-gray-800">Mukhta Solutions</h1>
              <p className="mb-8 leading-relaxed text-gray-700">Your Gateway to Kashmir</p>
              <div className="flex justify-center text-gray-700">
                <p className="">We are a registered travel agency under the Jammu & Kashmir Tourism Department, committed to offering safe, reliable, and memorable travel experiences across the valley.</p>
                <p>Welcome to Mukhta Solutions — your trusted travel partner in the breathtaking land of Kashmir.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="relative h-[32rem] bg-[url(/MukhtaSolutionsLogo.jpeg)] bg-auto bg-center bg-no-repeat border-b-4 border-red-500">
        <section className="absolute inset-0 bg-black opacity-[.80]">
          <div className="container mx-auto flex h-full px-5 py-24 items-center justify-center text-center text-white">
            <div className="lg:w-2/3 w-full">
              <h1 className="text-4xl sm:text-5xl font-semibold mb-6">Welcome to Mukhta Solutions</h1>
              <p className="text-xl mb-6">Your Gateway to Kashmir</p>
              <p className="mb-8 text-lg leading-relaxed">
                We are a trusted travel agency registered with the Jammu & Kashmir Tourism Department. We are committed to offering you safe, reliable, and unforgettable travel experiences across the beautiful valley of Kashmir.
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded-md font-semibold transition-all duration-300">
                  Get Started
                </button>
                <button className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

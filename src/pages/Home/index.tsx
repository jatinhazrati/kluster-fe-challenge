const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full flex xl:flex-row flex-col gap-10 max-container xl:padding-l wide:padding-r padding-b">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-24">
          <h1 className="mt-2 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:whitespace-nowrap relative z-10 pr-10">
              Welcome to
            </span>
            <br />
            Bookbay
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-xl">
            Journey Through Pages, Explore Endless Worlds
          </p>
        </div>
        <div className="relative flex-1 flex justify-center items-center max-xl:py-40 bg-center">
          <img
            src="/src/assets/home_page.svg"
            alt="Home Logo"
            width={400}
            height={400}
            className="object-contain relative z-10"
          />
        </div>
      </section>
    </>
  );
};

export default Home;

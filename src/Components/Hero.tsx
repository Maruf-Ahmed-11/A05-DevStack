import Banner from '../assets/banner-stack.png'


const Hero = () => {
  return (
    <div className="hero py-12 lg:py-20 bg-base-100 px-4 lg:px-16">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full max-w-7xl mx-auto py-12 gap-12">

        {/* Right Side */}
        <div className="flex-1 flex justify-center">
          <img
            src={Banner}
            alt="Development Stack Illustration"
            className="max-w-md w-full h-auto object-contain"
          />
        </div>

        {/* Left Side*/}
        <div className="flex-1 text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-neutral tracking-tight leading-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="py-6 text-base-content/70 text-base lg:text-lg max-w-lg">
            Explore frontend, backend, database, and tooling options, compare them
            side by side, and put together the stack that fits your next project.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 text-white border-none px-6">
              Explore Technologies
            </button>
            <button className="btn btn-outline border-base-300 hover:bg-base-200 hover:border-base-300 text-base-content px-6">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
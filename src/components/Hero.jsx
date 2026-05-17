import coffeeVideo from "../assets/coffee-video.mp4";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="relative h-screen overflow-hidden ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={coffeeVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex h-full px-6 md:px-10 text-white items-end pb-95 md:pb-64 md:justify-start">
        <div className="max-w-xl   p-6 rounded space-y-4 md:ml-10 mt-6 md:mt-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Crafted Coffee Experiences
          </h1>
          <p className="text-sm md:text-base leading-relaxed opacity-90">
            At Artisan Cafe, every cup tells a story, crafted from carefully
            sourced beans and brewed into rich, flavorful experiences with
            passion and precision.
          </p>
          <div className="flex gap-4 mt-6">
            <Link
              to="/shop"
              className="bg-amber-700 px-5 py-2 rounded-full hover:bg-amber-800 transition"
            >
              Explore Coffee
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;


import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { testimonials } from "../lib/constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-4 md:px-8 lg:px-24 py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-primary"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

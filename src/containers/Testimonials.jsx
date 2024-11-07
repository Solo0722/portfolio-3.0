
import TitleBar from "../components/TitleBar";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { testimonials } from "../lib/constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-8 md:px-24 lg:px-36 py-12 w-full">
      <TitleBar title1={"Kind words from"} title2="satisfied clients" />
      <div className="flex flex-col items-center">
        <div
          className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
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

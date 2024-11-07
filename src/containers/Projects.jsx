import { ExternalLink, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { projects } from '../lib/constants';
import TitleBar from "../components/TitleBar";
import Autoplay from "embla-carousel-autoplay";

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

 

  const onSelect = () => {
    if (!emblaApi) return;
  };

  return (
    <section className="px-8 md:px-24 lg:px-36 pb-12" id="projects">
      <TitleBar title1={"My"} title2={"Projects"} />
      <div className="relative">
        <Carousel
          ref={emblaRef}
          onSelect={onSelect}
          className="w-full"
          plugins={[
            Autoplay({
              delay: 10000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
              stopOnFocusIn:true
            }),
          ]}
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative group overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9 my-1">
                  <img
                    src={project.image_url}
                    alt={project.name}
                    className="h-80 transition-transform duration-300 group-hover:scale-110 object-fill"
                    style={{
                      mixBlendMode:"color-burn"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-foreground">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.name}
                      </h3>
                      <p className="text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tools.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/20 text-foreground text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-blue-300 flex items-center transition-colors duration-200"
                          >
                            <ExternalLink size={18} className="mr-1" />
                            Live Demo
                          </a>
                        )}
                        {project.github_repo && (
                          <a
                            href={project.github_repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-blue-300 flex items-center transition-colors duration-200"
                          >
                            <Github size={18} className="mr-1" />
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

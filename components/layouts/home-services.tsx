import Image from "next/image";

import { Card, CardContent, CardTitle } from "../ui/card";
import { SectionHeader, SectionTitle, SectionWrapper } from "../ui/section-wrapper";

const SERVICES = [
  {
    title: "Web UI Development",
    description:
      "Pixel-perfect, accessible, and responsive websites tailored for a seamless user experience.",
    thumbnail: "/images/web-ui-development-img.jpg",
  },
  {
    title: "SPA & Frameworks",
    description:
      "Expert in React, Vue, and modern JavaScript ecosystems to build fast, scalable single-page applications.",
    thumbnail: "/images/spa-framework-img.jpg",
  },
  {
    title: "Performance Optimisation",
    description:
      "Creating fast-loading, smooth, and efficient frontends with best practices in performance tuning.",
    thumbnail: "/images/performance-optimization-img.jpg",
  },
  {
    title: "Cross-Browser & Mobile",
    description:
      "Delivering consistent, high-quality interfaces across all major browsers and mobile devices.",
    thumbnail: "/images/cross-browser-testing-img.jpg",
  },
  {
    title: "UI/UX Collaboration",
    description:
      "Working closely with designers to bring mockups to life with clean, maintainable code.",
    thumbnail: "/images/ui-ux-collaboration-img.jpg",
  },
];

function Services() {
  return (
    <SectionWrapper
      id="services"
      asContainer={false}
      className="py-12 lg:py-16 xl:py-20 2xl:py-[6.25rem] bg-secondary rounded-4xl lg:rounded-[5rem]"
    >
      <div className="container">
        <SectionHeader
          className="text-white/80 text-center"
          data-aos="fade-down"
        >
          <SectionTitle className="text-white">
            My <span>Services</span>
          </SectionTitle>
          <p>
            I design and build clean, responsive, and user-friendly interfaces
            that bring ideas to life.
          </p>
        </SectionHeader>

        <div>
          <div className="flex flex-wrap justify-center gap-y-4 2xl:gap-y-6 -mx-2 2xl:-mx-4">
            {SERVICES.map(({ title, description, thumbnail }, index) => (
              <div
                className="w-full sm:w-1/2 lg:w-1/3 px-2 2xl:px-4"
                key={index}
                data-aos="flip-left"
              >
                <Card className="group h-full p-4 md:p-6 transition-all duration-300 border-0 max-sm:max-w-[400px] max-sm:mx-auto hover:text-white hover:bg-primary">
                  <figure className="mb-4 rounded-2xl overflow-hidden">
                    <Image
                      className="w-full aspect-[360/220] object-cover object-center transition-all duration-300 group-hover:scale-105"
                      src={thumbnail}
                      width={360}
                      height={220}
                      alt={title}
                    />
                  </figure>
                  <CardTitle className="transition-all duration-300 group-hover:text-white">
                    {title}
                  </CardTitle>
                  <CardContent>{description}</CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Services;

import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "../ui/button";
import { SectionWrapper } from "../ui/section-wrapper";
import { Column, TwoColLayout } from "../ui/two-col-block";

function Hero() {
  return (
    <SectionWrapper>
      <TwoColLayout wrapReverse={true}>
        <Column className="lg:w-[45%]" data-aos="fade-right">
          <small className="block mb-2 text-[0.9375rem] capitalize tracking-wide text-primary font-medium">
            Transforming ideas into impactful web experiences
          </small>
          <h1 className="mb-2 2xl:mb-4 font-bold font-sora text-[1.5rem] 2xl:text-[2.25rem] leading-tight">
            Hi, I'm Bijay Magar — Web Developer & UI Craftsman
          </h1>
          <p>
            I'm a passionate web developer focused on building clean, scalable,
            and user-first websites and applications. I love turning complex
            ideas into intuitive, efficient, and beautiful digital experiences
            using modern technologies like React, Next.js, and Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 2xl:mt-8">
            <Link href="/contact" className={buttonVariants()}>
              Let's Work Together
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "outline" })}
            >
              View My Projects
            </Link>
          </div>
        </Column>
        <Column className="lg:w-[55%]" data-aos="fade-left">
          <div className="max-w-[450px] mx-auto [&_img]:w-full">
            <Image
              src="/images/developer-working-img.png"
              width={714}
              height={694}
              alt="developer-working-img"
            />
          </div>
        </Column>
      </TwoColLayout>
    </SectionWrapper>
  );
}

export default Hero;

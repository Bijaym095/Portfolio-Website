import { SectionTitle, SectionWrapper } from "../ui/section-wrapper";
import { Column, TwoColLayout } from "../ui/two-col-block";
import ContactForm from "./home-contact-form";
import { FaPhoneAlt, IoMail } from "@/lib/icon";

function Contact() {
  return (
    <SectionWrapper>
      <TwoColLayout className="items-start">
        <Column data-aos="fade-right">
          <SectionTitle>
            Let&apos;s <span>Work Together</span>
          </SectionTitle>
          <p>
            I&apos;m always open to discussing software projects, collaboration
            opportunities, or just having a chat over coffee.
          </p>
          <ul className="space-y-3 2xl:space-y-4 mt-4 2xl:mt-6 [&_a]:inline-flex [&_a]:items-center [&_a]:gap-2 [&_a]:transition-all [&_a]:duration-300 [&_a]:hover:text-primary [&_a:hover>svg]:text-white [&_a:hover>svg]:bg-primary [&_svg]:size-8 [&_svg]:border [&_svg]:border-gray-300 [&_svg]:rounded-full [&_svg]:p-2 [&_svg]:transition-all [&_svg]:duration-300">
            <li>
              <a href="mailto:bijaym095@gmail.com">
                <IoMail /> bijaym095@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:9862111037">
                <FaPhoneAlt /> +9779862111037
              </a>
            </li>
          </ul>
        </Column>
        <Column data-aos="fade-left">
          <ContactForm />
        </Column>
      </TwoColLayout>
    </SectionWrapper>
  );
}

export default Contact;

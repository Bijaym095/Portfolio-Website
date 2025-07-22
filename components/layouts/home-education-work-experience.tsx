import { SectionHeader, SectionTitle, SectionWrapper } from "../ui/section-wrapper";
import TimelineColumn from "../ui/timeline-column";
import { Column, TwoColLayout } from "../ui/two-col-block";

const TIMELINE_INFO = {
  education: [
    {
      institution: "Harmony Institute",
      degree: "Master in Visual Arts",
      period: "2012 – 2014",
    },
    {
      institution: "Aurora Academy",
      degree: "Bachelor in Visual Arts",
      period: "2008 – 2012",
    },
    {
      institution: "Crystalbrook",
      degree: "High School",
      period: "1996 – 2008",
    },
  ],
  experience: [
    {
      company: "Insightlancer",
      role: "Senior Product Designer",
      period: "2018 – 2023",
    },
    {
      company: "Self-Employed",
      role: "Visual Artist",
      period: "2016 – 2018",
    },
    {
      company: "KG Graphics Studio",
      role: "Web Designer",
      period: "2014 – 2016",
    },
  ],
};

function EducationWorkExperience() {
  return (
    <SectionWrapper className="lg:max-w-[70.625rem]">
      <SectionHeader className="text-center">
        <SectionTitle>
          My <span>Education</span> & <span>Work Experience</span>
        </SectionTitle>
      </SectionHeader>

      <TwoColLayout className="items-start">
        <Column className="lg:w-[50%]">
          <TimelineColumn
            title="Education"
            items={TIMELINE_INFO.education}
          />
        </Column>
        <Column className="lg:w-[50%]">
          <TimelineColumn
            title="Work Experience"
            items={TIMELINE_INFO.experience}
          />
        </Column>
      </TwoColLayout>
    </SectionWrapper>
  );
}

export default EducationWorkExperience;

import React from "react";
import { Award, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import useLocalizer from "@/hooks/useLocalizer";
import Intro from "./Intro";
import RateBox from "./RateBox";
import Title from "@/components/common/Title";
import { ScrollSection } from "@/components/common/ScrollSection";
const AboutUsSection: React.FC = () => {
  const { isRTL } = useLocalizer();

  return (
    <section className=" grid grid-cols-1 lg:grid-cols-2 my-10 gap-4">
      {/* <div className="relative flex flex-col gap-4">
        <Quote
          className={cn(
            "text-gray-300 absolute opacity-30 -z-1 -top-10",
            isRTL ? "-right-6" : "-left-6 rotate-y-180"
          )}
          size={150}
        />
        <p className="lg:!text-xl">
          {
            isRTL ? `

نحن في "شركة القمة" لسنا مجرد شركة مقاولات عادية، بل نحن بناة ثقة وشريك معتمد في تشييد مستقبل عمراني مزدهر. تأسست شركتنا على رؤية طموحة لرفع المعايير في صناعة البناء والتشييد، من خلال التزام راسخ بأسس الجودة المتقنة، والدقة في التنفيذ، والالتزام بالمواعيد النهائية.

نتميز بفريق هندسي وإداري من ذوي الخبرة والكفاءة العالية، يمتلكون سنوات طويلة من الخبرة في إدارة وتنفيذ مجموعة واسعة من المشاريع، بدءًا من المشاريع السكنية والفيلات الفاخرة ووصولاً إلى المشاريع التجارية والمرافق العامة الكبرى.

نعتمد في عملنا على أحدث التقنيات العالمية ومواد البناء عالية الجودة، لضمان متانة المنشآت وديمومتها، مع الالتزام الكامل بمعايير السلامة والأمان.

ثقة عملائنا هي رأس مالنا الحقيقي، لذلك نحرص على بناء شراكات متينة قائمة على الشفافية المطلقة والاحترام المتبادل، حيث نستمع بعناية لاحتياجاتهم ونتعاون معهم لتحويل رؤيتهم إلى واقع ملموس يتجاوز التوقعات.

نسخر طاقاتنا وإبداعنا لخدمة أهداف رؤية 2030 الطموحة من خلال المساهمة في تشييد البنية التحتية المتطورة والمجتمعات العمرانية المستدامة التي تلبي احتياجات الأجيال الحالية والقادمة.

نفتخر بتسليم مئات المشاريع الناجحة التي أصبحت علامات بارزة في المشهد العمراني، وهو ما يعكس قدرتنا على تحمل المسؤولية والوفاء بأعلى معايير الجودة.

في النهاية، فلسفتنا بسيطة: "التميز في كل لبنة نضعها، والثقة في كل وعد نقطعه". نحن هنا لبناء إرث من الإنجازات، وليس مجرد مباني.` : `At Al-Qimah, we are not just another construction company; we are builders of trust and a trusted partner in constructing a prosperous urban future. Our company was founded on an ambitious vision to raise standards in the construction industry through a firm commitment to quality, precision in execution, and adherence to deadlines.

We are distinguished by our highly experienced and efficient engineering and administrative team, who have many years of experience in managing and executing a wide range of projects, from residential projects and luxury villas to commercial projects and major public facilities.

We rely on the latest global technologies and high-quality building materials to ensure the durability and longevity of our structures, while fully complying with safety and security standards.

Our clients' trust is our real capital, so we are keen to build strong partnerships based on absolute transparency and mutual respect, where we listen carefully to their needs and work with them to turn their vision into a tangible reality that exceeds expectations.

We harness our energy and creativity to serve the ambitious goals of Vision 2030 by contributing to the construction of advanced infrastructure and sustainable urban communities that meet the needs of current and future generations.

We are proud to have delivered hundreds of successful projects that have become landmarks in the urban landscape, reflecting our ability to take responsibility and meet the highest quality standards.

Ultimately, our philosophy is simple: “Excellence in every brick we lay, trust in every promise we make.” We are here to build a legacy of achievements, not just buildings.`
          }
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
          <RateBox key={1} rateValue={150} text={isRTL ? "مشروع" : "Projects"} />
          <RateBox key={2} rateValue={200} text={isRTL ? "عميل" : "Clients"} />
          <RateBox key={3} rateValue={300} text={isRTL ? "شقة" : "Apartment"} />
        </div>
      </div> */}
      <ScrollSection  animationType="right">
        <div className="flex flex-col gap-4">
          <Title
            title={isRTL ? "من نحن ؟" : "About us ?"}
            subTitles={[
              isRTL
                ? `شركة القمة هي إحدى الشركات الرائدة في مجال المقاولات والبناء في المملكة العربية السعودية. تأسست الشركة عام 2009 بهدف تقديم خدمات متميزة في جميع أنواع الأعمال الإنشائية.`
                : `Al-Qimah Company is one of the leading companies in the field of contracting and construction in the Kingdom of Saudi Arabia. The company was established in 2009 with the aim of providing distinguished services in all types of construction works.`,
              isRTL
                ? `نحن نفخر بتقديم حلول شاملة ومتكاملة تبدأ من التصميم المعماري وتنتهي بالتسليم النهائي، مع الالتزام بأعلى معايير الجودة والأمان في جميع مراحل العمل.`
                : `We pride ourselves on providing comprehensive and integrated solutions, starting from architectural design and ending with final delivery, while adhering to the highest standards of quality and safety at all stages of work.`,
            ]}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <RateBox
              key={1}
              rateValue={150}
              text={isRTL ? "سنة خبرة" : "Experence years"}
            />
            <RateBox
              key={2}
              rateValue={250}
              text={isRTL ? "مشروع مكتمل" : "Completed project"}
            />
            <RateBox
              key={3}
              rateValue={200}
              text={isRTL ? "عميل راضي" : "Convinced customer"}
            />
            <RateBox
              key={4}
              rateValue={100}
              text={isRTL ? "دعم فني" : "Technical Support"}
            />
          </div>
        </div>
      </ScrollSection>
      <div className="w-full min-h-[200px] h-full">
        <div
          className="h-full w-full bg-cover flex flex-col object-cover p-4 rounded-lg shadow overflow-hidden relative bg-center  bg-fixed"
          style={{ backgroundImage: `url('images/estate.jpg')` }}
        >
          <div className="h-full w-full absolute top-0 bottom-0 right-0 blur-sm bg-black  opacity-10 z-0 " />
          <div className=" bg-dark flex flex-col gap-4 w-[80%] lg:w-[50%] h-[60%] lg:h-[50%] absolute z-10 top-[60%] translate-y-[-40%] rounded-md p-4">
            <div className="flex flex-row gap-2">
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-primary">
                <Award size={24} color="black" />
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="font-bold text-sm lg:text-lg text-card">ISO 9001</span>
                <span className="text-sm lg:text-lg text-gray-500">{isRTL ? "شهادة الجودة": "Quality Certificate"}</span>
              </div>
            </div>
            <p className="text-gray-500">{isRTL ? "حاصلون على شهادات الجودة والأمان المعتمدة دولياً" : "Hold internationally recognized quality and safety certifications"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

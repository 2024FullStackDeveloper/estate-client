import React from "react";
import Title from "../../common/Title";
import TextDecorator from "../../common/TextDecorator";
import Ball from "../../animations/Ball";
import AnimatedButton from "../../common/AnimatedButton";
import FrameBox from "./FrameBox";
import useLocalizer from "@/hooks/useLocalizer";
import useScrollSmooth from "@/hooks/useScrollSmooth";

const MainSection: React.FC = () => {
  const { t, isRTL } = useLocalizer();
  const goTo = useScrollSmooth();

  return (
    <div className="relative w-full">
      <FrameBox className="hidden lg:block" imageUrl="images/building.jpg" />
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center justify-center my-10  z-10">
        <div className="col-span-2 flex flex-col gap-4 px-1 relative">
          <Ball className="animate-ping" />
          <Title title={t("titles.intro")} className="underline" />
          <TextDecorator
            className="lg:text-6xl text-4xl font-bold my-2"
            values={[
              {
                text: isRTL
                  ? "انت بالمسار الصح عبر"
                  : "You are on the right track",
              },
              {
                text: isRTL ? "شركة القمة" : "Alkema Company",
                className: "italic font-normal",
              },
              {
                text: isRTL
                  ? "وعلى بعد خطوة واحدة للوصول الى ماتريد."
                  : "One step away from getting what you want.",
              },
            ]}
          />
          <p className="text-justify">
            {isRTL
              ? `نحن شركة (القمة) للمقاولات، إحدى الركائز الأساسية في قطاع البناء والتطوير العمراني، حيث نمتلك خبرة واسعة في تنفيذ المشاريع بمختلف أحجامها وتعقيداتها. تأسست شركتنا على يد مجموعة من المهندسين والمتخصصين ذوي الخبرة الطويلة، الذين يجمعون بين المعرفة الأكاديمية العميقة والتطبيق العملي الميداني.

نتميز بتقديم حلول متكاملة تشمل جميع مراحل المشروع، بدءًا من التخطيط والدراسات الأولية، مرورًا بالتصميم الهندسي الدقيق، ووصولاً إلى التنفيذ الميداني وتسليم المفتاح. نعتمد في عملنا على أحدث التقنيات العالمية ومواد البناء عالية الجودة، التي تضمن متانة المنشآت وديمومتها لسنوات طويلة.

فريقنا الهندسي والإداري مدرب بأعلى المعايير، ويعمل بروح فريق واحدة لضمان الدقة في التنفيذ والالتزام بالجداول الزمنية والميزانيات المحددة. سلامة العاملين والمقاولين والمستخدمين النهائيين هي في صلب أولوياتنا، لذلك نلتزم بأعلى معايير الصحة والسلامة المهنية في جميع مواقعنا.

ثقة عملائنا هي أغلى ما نملك، لذلك نحرص على بناء شراكات طويلة الأمد قائمة على الشفافية والنزاهة والاحترام المتبادل. مشاريعنا المتنوعة تشمل تشييد المجمعات السكنية، والفنادق، والمستشفيات، والمراكز التجارية، والبنية التحتية، مما يعكس مرونتنا وقدرتنا على التكيف مع متطلبات السوق.

نساهم بدور فاعل في تحقيق رؤية 2030 من خلال المشاركة في المشاريع الوطنية الكبرى والتركيز على مفاهيم البناء المستدام والحلول الصديقة للبيئة. في النهاية، نحن لا نبيع خدمات بناء فحسب، بل نصنع ثقة وتبنى بها علاقات متينة، ونساهم في تشكيل معالم المستقبل.`
              : `We are Al-Qimah Contracting Company, one of the cornerstones of the construction and urban development sector, with extensive experience in implementing projects of various sizes and complexities. Our company was founded by a group of engineers and specialists with long experience, combining deep academic knowledge with practical field application.

We are distinguished by providing integrated solutions that cover all stages of the project, from planning and preliminary studies, through precise engineering design, to field implementation and turnkey delivery. In our work, we rely on the latest global technologies and high-quality building materials, which ensure the durability and longevity of our structures for many years to come.

Our engineering and administrative team is trained to the highest standards and works as a single team to ensure precision in execution and adherence to specified schedules and budgets. The safety of workers, contractors, and end users is at the heart of our priorities, so we adhere to the highest standards of occupational health and safety at all our sites.

Our clients' trust is our most valuable asset, so we strive to build long-term partnerships based on transparency, integrity, and mutual respect. Our diverse projects include the construction of residential complexes, hotels, hospitals, commercial centers, and infrastructure, reflecting our flexibility and ability to adapt to market requirements.

We actively contribute to the realization of Vision 2030 by participating in major national projects and focusing on sustainable construction concepts and environmentally friendly solutions. Ultimately, we do not just sell construction services; we build trust and strong relationships, and contribute to shaping the future.
`}
          </p>
          <TextDecorator
            className="lg:text-4xl text-2xl font-bold my-2"
            values={[
              {
                text: isRTL ? "بداية سلم النجاح خطوة" : "The beginning of the ladder of success is one step.",
              },
              {
                text: isRTL ? "للوصول الى" : "To get to",
              },
              {
                text:isRTL ?  "هدفك" :  "Your goal",
                className: "italic font-normal bg-primary -skew-x-12 px-1 ",
              },
              {
                text: ".",
              },
            ]}
          />
          <div>
            <AnimatedButton
              directArrowColor="text-black"
              label={t("buttons.discover_more")}
              arrowDirection="down"
              onClick={() => {
                goTo("ourServicesSection")
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSection;

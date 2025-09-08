import React from "react";
import Title from "../../common/Title";
import useLocalizer from "@/hooks/useLocalizer";
import { ScrollSection } from "@/components/common/ScrollSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";

const fakeArOurServicesData = [
  {
    year: 2025,
    description: "بناء وتاسيس شركة التوفيق",
    content: `١. تأسيس شركة مقاولات يبدأ بدراسة جدوى شاملة لتحديد نطاق العمل والسوق المستهدف والقدرة التنافسية.
٢. يلي ذلك اختيار الشكل القانوني المناسب للشركة سواء كانت ذات مسؤولية محدودة أو مساهمة مقفلة، حسب حجم رأس المال ونطاق المشاريع المتوقعة.
٣. يجب تحديد رأس المال الكافي لتغطية التكاليف التشغيلية الأولية مثل المعدات والرواتب والتأمينات.
٤. الحصول على التراخيص اللازمة من الهيئات المحلية المختصة مثل وزارة التجارة والبلدية والغرف التجارية هو خطوة حاسمة.
٥. يتطلب الأمر أيضًا الحصول على سجل مقاولين معتمد من الجهات الحكومية للتأهل للمناقصات والمشاريع الحكومية.
٦. بناء فريق عمل مؤهل ومتمرس يضم مهندسين ومشرفين وإداريين وعمالة فنية هو عماد نجاح الشركة.
٧. تأمين المعدات والآلات الأساسية والمواد الخام وبناء شبكة موثوقة من الموردين أمر لا غنى عنه.
٨. وضع أنظمة داخلية دقيقة للإدارة المالية والمحاسبة وإدارة المشتريات والمخازن لضمان السير المنتظم للأعمال.
٩. تطوير خطة تسويقية قوية للتعريف بالشركة وبناء سمعة طيبة تعتمد على الجودة والالتزام بمواعيد التسليم.
١٠. الاهتمام بتطبيق أعلى معايير السلامة والأمن المهني في جميع مواقع العمل لحماية العمال وتجنب المخاطر.
١١. بناء شبكة علاقات قوية مع العملاء والمقاولين من الباطن والاستشاريين يساهم في ضمان استمرارية تدفق المشاريع.
١٢. يجب أن تكون الشركة مرنة وقادرة على التكيف مع متطلبات السوق المتغيرة وتقلبات أسعار المواد.`,
    address: "السعودية - جدة",
    imageUrl: "images/project1.jpg",
  },
  {
    year: 2024,
    description: "بناء وتاسيس شركة الامل",
    content: `١. تأسيس شركة مقاولات يبدأ بدراسة جدوى شاملة لتحديد نطاق العمل والسوق المستهدف والقدرة التنافسية.
٢. يلي ذلك اختيار الشكل القانوني المناسب للشركة سواء كانت ذات مسؤولية محدودة أو مساهمة مقفلة، حسب حجم رأس المال ونطاق المشاريع المتوقعة.
٣. يجب تحديد رأس المال الكافي لتغطية التكاليف التشغيلية الأولية مثل المعدات والرواتب والتأمينات.
٤. الحصول على التراخيص اللازمة من الهيئات المحلية المختصة مثل وزارة التجارة والبلدية والغرف التجارية هو خطوة حاسمة.
٥. يتطلب الأمر أيضًا الحصول على سجل مقاولين معتمد من الجهات الحكومية للتأهل للمناقصات والمشاريع الحكومية.
٦. بناء فريق عمل مؤهل ومتمرس يضم مهندسين ومشرفين وإداريين وعمالة فنية هو عماد نجاح الشركة.
٧. تأمين المعدات والآلات الأساسية والمواد الخام وبناء شبكة موثوقة من الموردين أمر لا غنى عنه.
٨. وضع أنظمة داخلية دقيقة للإدارة المالية والمحاسبة وإدارة المشتريات والمخازن لضمان السير المنتظم للأعمال.
٩. تطوير خطة تسويقية قوية للتعريف بالشركة وبناء سمعة طيبة تعتمد على الجودة والالتزام بمواعيد التسليم.
١٠. الاهتمام بتطبيق أعلى معايير السلامة والأمن المهني في جميع مواقع العمل لحماية العمال وتجنب المخاطر.
١١. بناء شبكة علاقات قوية مع العملاء والمقاولين من الباطن والاستشاريين يساهم في ضمان استمرارية تدفق المشاريع.
١٢. يجب أن تكون الشركة مرنة وقادرة على التكيف مع متطلبات السوق المتغيرة وتقلبات أسعار المواد.`,

    address: "السعودية - جدة",
    imageUrl: "images/project2.jpeg",
  },
  {
    year: 2023,
    description: "بناء وتاسيس شركة الحوشبي",
    address: "السعودية - جدة",
    imageUrl: "images/project1.jpg",
  },
];
const fakeEnOurServicesData = [
  {
    year: 2025,
    description: "Establishment and founding of Al-Tawfiq Company",
    address: "Saudi Arabia - Jeddah",
    imageUrl: "images/project1.jpg",
    content: `Establishing a contracting company begins with a comprehensive feasibility study to define the scope of work, target market, and competitive edge.
This is followed by selecting the appropriate legal structure for the company, whether it's a limited liability company or a closed joint-stock company, based on the capital and the expected project scale.
Securing sufficient capital is crucial to cover initial operational costs such as equipment, salaries, and insurances.
Obtaining the necessary licenses from relevant local authorities, such as the Ministry of Commerce, Municipality, and Chamber of Commerce, is a critical step.
It also requires obtaining an accredited contractor classification from government entities to qualify for tenders and government projects.
Building a qualified and experienced team comprising engineers, supervisors, administrators, and technical labor is the cornerstone of the company's success.
Securing essential equipment, machinery, raw materials, and building a reliable network of suppliers is indispensable.
Establishing precise internal systems for financial management, accounting, procurement, and inventory is vital to ensure smooth business operations.
Developing a strong marketing plan to introduce the company and build a reputable brand based on quality and adherence to delivery deadlines is essential.
Prioritizing the highest standards of health and safety in all work sites is mandatory to protect workers and avoid potential hazards.
Building a strong network of relationships with clients, subcontractors, and consultants helps ensure a continuous flow of projects.
The company must be flexible and adaptable to changing market demands and fluctuations in material prices.`,
  },
  {
    year: 2024,
    description: "Establishment and founding of Al-Amal Company",
    address: "Saudi Arabia - Jeddah",
    imageUrl: "images/project2.jpeg",
    content: `Establishing a contracting company begins with a comprehensive feasibility study to define the scope of work, target market, and competitive edge.
This is followed by selecting the appropriate legal structure for the company, whether it's a limited liability company or a closed joint-stock company, based on the capital and the expected project scale.
Securing sufficient capital is crucial to cover initial operational costs such as equipment, salaries, and insurances.
Obtaining the necessary licenses from relevant local authorities, such as the Ministry of Commerce, Municipality, and Chamber of Commerce, is a critical step.
It also requires obtaining an accredited contractor classification from government entities to qualify for tenders and government projects.
Building a qualified and experienced team comprising engineers, supervisors, administrators, and technical labor is the cornerstone of the company's success.
Securing essential equipment, machinery, raw materials, and building a reliable network of suppliers is indispensable.
Establishing precise internal systems for financial management, accounting, procurement, and inventory is vital to ensure smooth business operations.
Developing a strong marketing plan to introduce the company and build a reputable brand based on quality and adherence to delivery deadlines is essential.
Prioritizing the highest standards of health and safety in all work sites is mandatory to protect workers and avoid potential hazards.
Building a strong network of relationships with clients, subcontractors, and consultants helps ensure a continuous flow of projects.
The company must be flexible and adaptable to changing market demands and fluctuations in material prices.`,
  },
  {
    year: 2023,
    description: "Establishment and founding of Al-Houshabi Company",
    address: "Saudi Arabia - Jeddah",
    imageUrl: "images/project2.jpeg",
  },
];

const OurProjectsSection: React.FC = () => {
  const { isRTL } = useLocalizer();
  const [api, setApi] = React.useState<CarouselApi>();
  const [count, setCount] = React.useState<number>(0);
  const [current, setCurrent] = React.useState<number>(0);
  const data = isRTL ? fakeArOurServicesData : fakeEnOurServicesData;

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList()?.length);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const canScrollNext = React.useMemo(() => {
    return current != count;
  }, [current, count]);

  const canScrollPrev = React.useMemo(() => {
    return current != 1;
  }, [current]);

  return (
    <section
      id="ourProjectsSection"
      className="flex flex-col gap-4 !bg-transparent my-10"
    >
      <ScrollSection animationType="scale">
        <Title
          prefix={false}
          subTitles={[
            isRTL
              ? "نفخر بإنجازاتنا في تنفيذ مشاريع متنوعة تلبي احتياجات عملائنا بأعلى معايير الجودة"
              : "We take pride in our achievements in implementing diverse projects that meet our clients' needs with the highest quality standards.",
          ]}
          subTitleClassName="text-center"
          center
          title={isRTL ? "مشاريعنا" : "Our projects"}
        />
      </ScrollSection>
      <div className="flex flex-row gap-2">
        <Button
          className="h-14 w-14"
          variant="dark"
          disabled={!canScrollNext}
          onClick={() => {
            if (api?.canScrollNext()) {
              api?.scrollNext();
            }
          }}
        >
          {isRTL ? <ArrowRight size={24} /> : <ArrowLeft size={24} />}
        </Button>
        <Button
          className="h-14 w-14"
          variant="dark"
          disabled={!canScrollPrev}
          onClick={() => {
            if (api?.canScrollPrev()) {
              api?.scrollPrev();
            }
          }}
        >
          {isRTL ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
        </Button>
      </div>
      <Carousel setApi={setApi} dir="ltr" className="w-full mt-10">
        <CarouselContent className="-ml-1">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="select-none pl-2 lg:basis-1/2 "
            >
              <ProjectCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default OurProjectsSection;

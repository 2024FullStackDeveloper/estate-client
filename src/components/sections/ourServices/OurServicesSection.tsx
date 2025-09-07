import React from "react";
import Title from "../../common/Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../../ui/carousel";
import useLocalizer from "@/hooks/useLocalizer";
import { Button } from "../../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ServiceCard from "./ServiceCard";


const fakeArOurServicesData = [
{
    id: 1,
    title: "بناء وتشييد الفلل السكنية",
    subTitle: "تصميم وتنفيذ فلل مبتكرة ومخصصة تلبي كافة أذواق واحتيجات العائلة الحديثة.",
    content: "نقدم خدمة شاملة تشمل التصميم الهندسي، الحصول على التراخيص، التنفيذ، والتسليم المفتاح باليد.",
    items: [
      {
        up: "مدة التنفيذ",
        down: "12 - 18 شهرًا"
      },
      {
        up: "السعر يبدأ من - إلى",
        down: "1,200,000 - 5,000,000 ر.س"
      }
    ]
}
,
{
    id: 2,
    title: "تشطيب وتجديد الشقق",
    subTitle: "تحويل مساحتك إلى منزل أحلامك بتشطيبات عالية الجودة وأسعار تنافسية.",
    content: "خدماتنا تشمل أعمال البلاط، الكهرباء، السباكة، الدهان، والأسقف المعلقة.",
    items: [
      {
        up: "مدة التنفيذ",
        down: "2 - 4 أشهر"
      },
      {
        up: "السعر يبدأ من - إلى",
        down: "50,000 - 200,000 ر.س"
      }
    ]
}
,
{
    id: 3,
    title: "أعمال البنية التحتية",
    subTitle: "تنفيذ مشاريع الطرق، تصريف مياه الأمطار، وشبكات الصرف الصحي للمجمعات السكنية.",
    content: "ننفذ مشاريع البنية التحتية وفقًا لأعلى معايير الجودة والمواصفات الفنية.",
    items: [
      {
        up: "نطاق العمل",
        down: "مشاريع حكومية وخاصة"
      },
      {
        up: "قيمة المشروع",
        down: "يحدد حسب المخططات"
      }
    ]
}
,
{
    id: 4,
    title: "إدارة المشاريع",
    subTitle: "الإشراف الكامل على مشروعك لضمان الجودة، الالتزام بالوقت، والموازنة المحددة.",
    content: "نقوم بإدارة جميع المقاولين والباطنين نيابة عنك، ونوفر لك تقارير أسبوعية مفصلة.",
    items: [
      {
        up: "نسبة الإدارة",
        down: "3% - 7% من قيمة المشروع"
      },
      {
        up: "مدة العقد",
        down: "مدة تنفيذ المشروع"
      }
    ]
}
,
{
    id: 5,
    title: "الترميم والصيانة",
    subTitle: "خدمات صيانة دورية وطارئة لضمان سلامة وأمان منشآتك على المدى الطويل.",
    content: "نقدم عقود صيانة سنوية أو نتدخل لحل المشاكل الهيكلية والإنشائية الطارئة.",
    items: [
      {
        up: "وقت الاستجابة",
        down: "24 - 48 ساعة"
      },
      {
        up: "نوع العقد",
        down: "مرة واحدة أو عقد سنوي"
      }
    ]
}
];
const fakeEnOurServicesData = [
  {
    id: 1,
    title: "Construction of Residential Villas",
    subTitle: "Design and implementation of innovative and customized villas that meet all tastes and needs of the modern family.",
    content: "We provide a comprehensive service that includes engineering design, obtaining permits, execution, and handover.",
    items: [
      {
        up: "Execution Period",
        down: "12 - 18 months"
      },
      {
        "up": "Price starts from - to",
        "down": "1,200,000 - 5,000,000 SAR"
      }
    ]
  },
  {
    id: 2,
    title: "Apartment Finishing and Renovation",
    subTitle: "Transform your space into your dream home with high-quality finishes and competitive prices.",
    content: "Our services include tiling, electrical, plumbing, painting, and suspended ceilings work.",
    items: [
      {
        up: "Execution Period",
        down: "2 - 4 months"
      },
      {
        up: "Price starts from - to",
        down: "50,000 - 200,000 SAR"
      }
    ]
  },
  {
    id: 3,
    title: "Infrastructure Works",
    subTitle: "Implementation of road projects, stormwater drainage, and sewage networks for residential compounds.",
    content: "We implement infrastructure projects according to the highest quality standards and technical specifications.",
    items: [
      {
        up: "Scope of Work",
        down: "Government and private projects"
      },
      {
        up: "Project Value",
        down: "Determined based on blueprints"
      }
    ]
  },
  {
    id: 4,
    title: "Project Management",
    subTitle: "Full supervision of your project to ensure quality, adherence to timeline, and specified budget.",
    content: "We manage all contractors and subcontractors on your behalf and provide you with detailed weekly reports.",
    items: [
      {
        up: "Management Fee",
        down: "3% - 7% of project value"
      },
      {
        up: "Contract Duration",
        down: "Project execution period"
      }
    ]
  },
  {
    id: 5,
    title: "Restoration and Maintenance",
    subTitle: "Periodic and emergency maintenance services to ensure the long-term safety and security of your facilities.",
    content: "We offer annual maintenance contracts or intervene to solve structural and construction emergencies.",
    items: [
      {
        up: "Response Time",
        down: "24 - 48 hours"
      },
      {
        up: "Contract Type",
        down: "One-time or annual contract"
      }
    ]
  }];
const OurServicesSection: React.FC = () => {
  const { dir, isRTL } = useLocalizer();
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
    <section id="ourServicesSection" className="flex flex-col gap-4 !bg-transparent my-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        <div>
          <Title title={isRTL ? "خدماتنا التي نفتخر بها" : "Our services that we are proud"} />
          <div className="flex flex-row gap-2 my-10">
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
        </div>

      </div>
      <Carousel setApi={setApi} dir="ltr" className="w-full mt-10">
        <CarouselContent className="-ml-1">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="select-none pl-2 md:basis-1/2 lg:basis-1/3 hover:scale-[1.02] hover:[&_.expand]:block transition-all ease-linear  duration-200"
            >
              <div dir={dir} className="p-1">
                <ServiceCard
                  className="cursor-pointer overflow-hidden"
                  key={item.id}
                  headerProps={{
                    title: item.title,
                    subTitle: item.subTitle,
                  }}
                  content={item.content}
                  items={item.items}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default OurServicesSection;

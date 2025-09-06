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
    title: "تاجير شقق",
    subTitle: "تاجير شقق بمساحات مختلفة تنيل اعجاب الجميع.",
    content:
      "خدامتنا تغطي ايظاً محافظات ومساحات كبيرة كل ماعليك فقط ان تتواصل بنا.",
    items: [
      {
        up: "عدد التفاعل",
        down: "3000 عميل",
      },
      {
        up: "يبداء السعر من - الى",
        down: "500 - 5000 ريال",
      },
    ],
  },
  {
    id: 2,
    title: "تاجير مكاتب",
    subTitle: "تاجير مكاتب بمساحات مختلفة تنيل اعجاب الجميع.",
    content:
      "خدامتنا تغطي ايظاً محافظات ومساحات كبيرة كل ماعليك فقط ان تتواصل بنا.",
    items: [
      {
        up: "عدد التفاعل",
        down: "500 عميل",
      },
      {
        up: "يبداء السعر من - الى",
        down: "200 - 5000 ريال"
      }
    ],
  },
  {
    id: 3,
    title: "بيع اراضي",
    subTitle: "بمساحات مختلفة تنيل اعجاب الجميع.",
    content:
      "خدامتنا تغطي ايظاً محافظات ومساحات كبيرة كل ماعليك فقط ان تتواصل بنا.",
    items: [
      {
        up: "عدد التفاعل",
        down: "6000 عميل",
      },
      {
        up: "يبداء السعر من - الى",
        down: "5000 - 20000 ريال",
      },
    ],
  },
  {
    id: 4,
    title: "بيع اراضي",
    subTitle: "بمساحات مختلفة تنيل اعجاب الجميع.",
    content:
      "خدامتنا تغطي ايظاً محافظات ومساحات كبيرة كل ماعليك فقط ان تتواصل بنا.",
    items: [
      {
        up: "عدد التفاعل",
        down: "6000 عميل",
      },
      {
        up: "يبداء السعر من - الى",
        down: "5000 - 20000 ريال",
      },
    ],
  },
];

const fakeEnourServicesData = [
  {
    id: 1,
    title: "Apartment Rentals",
    subTitle: "Renting apartments with various spaces that appeal to everyone.",
    content: "Our services also cover provinces and large areas. All you need to do is contact us.",
    items: [
      {
        up: "Number of Interactions",
        down: "3000 clients"
      },
      {
        up: "Price starts from - to",
        down: "500 - 5000 SAR"
      }
    ]
  },
  {
    id: 2,
    title: "Office Rentals",
    subTitle: "Renting offices with various spaces that appeal to everyone.",
    content: "Our services also cover provinces and large areas. All you need to do is contact us.",
    items: [
      {
        up: "Number of Interactions",
        down: "500 clients"
      },
      {
        up: "Price starts from - to",
        down: "200 - 5000 SAR"
      }
    ]
  },
  {
    id: 3,
    title: "Land Sales",
    subTitle: "With various spaces that appeal to everyone.",
    content: "Our services also cover provinces and large areas. All you need to do is contact us.",
    items: [
      {
        up: "Number of Interactions",
        down: "6000 clients"
      },
      {
        up: "Price starts from - to",
        down: "5000 - 20000 SAR"
      }
    ]
  },
  {
    id: 4,
    title: "Land Sales",
    subTitle: "With various spaces that appeal to everyone.",
    content: "Our services also cover provinces and large areas. All you need to do is contact us.",
    items: [
      {
        up: "Number of Interactions",
        down: "6000 clients"
      },
      {
        up: "Price starts from - to",
        down: "5000 - 20000 SAR"
      }
    ]
  }
];

const OurServicesSection: React.FC = () => {
  const { dir, isRTL } = useLocalizer();
  const [api, setApi] = React.useState<CarouselApi>();
  const [count, setCount] = React.useState<number>(0);
  const [current, setCurrent] = React.useState<number>(0);
  const data = isRTL ? fakeArOurServicesData : fakeEnourServicesData;

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
                  className="cursor-pointer"
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

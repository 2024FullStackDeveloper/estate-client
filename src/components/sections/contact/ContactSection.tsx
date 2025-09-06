import AnimatedButton from "@/components/common/AnimatedButton";
import Line from "@/components/common/Line";
import TextDecorator from "@/components/common/TextDecorator";
import Title from "@/components/common/Title";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useLocalizer from "@/hooks/useLocalizer";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactSection: React.FC = () => {
  const { t, isRTL } = useLocalizer();
  const fakeData = [
    {
      icon: <Phone size={24} />,
      values: ["+96655555550", "+96655555551"],
    },
    {
      icon: <Mail size={24} />,
      values: ["ex@info.com", "ex1@info.com"],
    },
    {
      icon: <MapPin size={24} />,
      values: [
        isRTL
          ? "شارع طلال بن عبد العزيز - بجوار امان للتامين"
          : "Talal Bin Abdulaziz Street - next to Aman Insurance",
        isRTL ? "المملكة العربية السعودية" : "The Kingdom of Saudi Arabia",
        isRTL ? "جدة" : "Jeddah",
      ],
    },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-4">
      <div className="lg:mx-10">
        <Card className="bg-dark p-5">
          <CardHeader>
            <CardTitle>
              <h2 className="text-secondary">
                {isRTL ? "تواصل معنا" : "Contact with us"}
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              required
              label={t("labels.name")}
              placeholder={t("placeholders.name")}
            />
            <Input
              required
              label={t("labels.email")}
              placeholder="ex@gmail.com"
            />
            <Input
              dir="ltr"
              required
              label={t("labels.phone")}
              placeholder="+96655555215"
            />
            <Input
              label={t("labels.how_heard_about_us")}
              placeholder={t("placeholders.how_heard_about_us")}
            />
            <Textarea
              label={t("labels.message")}
              placeholder={t("placeholders.message")}
            />
          </CardContent>
          <CardFooter>
            <AnimatedButton
              directArrowColor="text-primary"
              directColor="bg-black"
              activeDirectArrowColor="text-black"
              activeDirectColor="bg-white"
              className="min-w-[150px] text-black"
              isTransperent={false}
              label={t("buttons.send")}
              onClick={() => {}}
            />
          </CardFooter>
        </Card>
      </div>
      <div className="flex flex-col gap-4">
        <Title
          title={isRTL ? "تواصل بنا الان" : "Connect with us now"}
          className="underline"
        />
        <TextDecorator
          className="lg:text-6xl text-4xl font-bold my-2"
          values={[
            {
              text: isRTL
                ? "لا تتردد في التواصل بنا"
                : "Don't hesitate to contact us",
            },
            {
              text: isRTL
                ? "حيث ستجد مبتغاك وهدفك"
                : "Where you will find your desire and your goal",
              className: "italic font-normal",
            },
            {
              text: isRTL ? "من خلالنا." : "Through us.",
            },
          ]}
        />
        <Line />
        <div className="bg-card flex flex-col p-4 rounded-sm w-full">
          <Title
            title={isRTL ? "معلومات التواصل بنا" : "Contact us information"}
            subTitle={
              isRTL
                ? "نحنا متاحين على مدار 24 ساعة طلية الاسبوع عدا يوم الجمعة."
                : "We are available 24 hours a day, seven days a week, except on Fridays."
            }
            className="!text-3xl"
          />

          <ul className="flex flex-col p-0 my-5 list-none  [&>li]:mb-5">
            {fakeData.map((item, index) => (
              <li key={index}>
                <div className="flex flex-row items-center gap-4 ">
                  <div className="border border-dark h-14 w-14 rounded-md flex justify-center items-center">
                     {item.icon}
                  </div>
                  <div className="flex flex-col">
                    {item.values.map((e, index) => (
                      <bdi>
                        <span key={index}>{e}</span>
                      </bdi>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

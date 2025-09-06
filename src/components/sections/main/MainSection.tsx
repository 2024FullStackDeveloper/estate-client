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
      <FrameBox className="hidden lg:block" imageUrl="images/estate.png" />
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
                text: isRTL ? "شركة عقاركو" : "Aqarco Company",
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
              ? `ببالغ السرور والسعادة، نرحب بكم في بوابتكم العقارية الأولى التي تفتح لكم آفاقاً واسعةً من الفرص والإمكانيات في عالم الاستثمار والعقارات.
            إن زيارتكم اليوم ليست مجرد تصفح عابر، بل هي بداية رحلة مثيرة نحو
            اكتشاف عالم مليء بالخيارات الواعدة التي تلبي طموحاتكم وتتجاوز
            توقعاتكم. في موقعنا، نؤمن بأن كل زائر يحمل حلمه الخاص، سواء كان
            البحث عن منزل العائلة الأول، أو الاستثمار في عقار ذي عائد مجزٍ، أو
            حتى العثور على تلك المساحة التجارية المثالية التي تمثل انطلاقة
            المشروع الناجح. لذلك، حرصنا على تصميم منصة سهلة الاستخدام وغنية
            بالمحتوى الذي يضع بين أيديكم أحدث العروض العقارية المتميزة في مختلف
            المناطق والمدن. نفخر بأننا لا نقدم مجرد قوائم عقارية جافة، بل نقدم
            حلولاً متكاملة مصممة خصيصاً لمساعدتكم في كل خطوة من رحلتكم العقارية.
            من خلال فريقنا من الخبراء والمستشارين المتخصصين، نسعى جاهدين لتقديم
            الإرشاد والدعم الذي تحتاجونه لاتخاذ القرارات المدروسة التي تناسب
            متطلباتكم وميزانياتكم. نحن هنا لنجعل حلمكم العقاري حقيقة واقعة،
            ونعدكم بتجربة استثنائية تتميز بالمصداقية والشفافية والاحترافية.
            تصفحوا موقعنا بحرية، واستفيدوا من أدواتنا الذكية التي صممت لتسهيل
            عملية البحث والموازنة بين الخيارات المتاحة. مرحباً بكم في عالم من
            الفرص غير المحدودة، حيث يبدأ كل حلم عقاري برحلة ناجحة معنا. شكراً
            لثقتكم، ونتمنى لكم تجربة ممتعة ومفيدة في موقعنا!`
              : `It is with great pleasure and happiness that we welcome you to your first real estate portal, which opens up a wide range of opportunities and possibilities in the world of investment and real estate.
Your visit today is not just a passing browse, but the beginning of an exciting journey towards
discovering a world full of promising options that meet your ambitions and exceed
            expectations. At our site, we believe that every visitor has their own dream, whether it is
searching for their first family home, investing in a lucrative property, or
even finding that perfect commercial space that represents the launch of a
successful project. That's why we've designed an easy-to-use platform rich
            in content that puts the latest premium real estate listings in various
            regions and cities at your fingertips. We pride ourselves on offering more than just dry real estate listings; we provide
            integrated solutions tailored to assist you every step of your real estate journey.
            Through our team of experts and specialized consultants, we strive to provide
            the guidance and support you need to make informed decisions that suit
            your requirements and budgets. We are here to make your real estate dream a reality,
            and we promise you an exceptional experience characterized by credibility, transparency, and professionalism.
            Feel free to browse our website and take advantage of our smart tools designed to facilitate
            the search process and help you weigh your options. Welcome to a world of
            unlimited opportunities, where every real estate dream begins with a successful journey with us. Thank you
for your trust, and we wish you an enjoyable and useful experience on our website!`}
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

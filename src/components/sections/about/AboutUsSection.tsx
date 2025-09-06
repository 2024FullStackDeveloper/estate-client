import React from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import useLocalizer from "@/hooks/useLocalizer";
import Intro from "./Intro";
import RateBox from "./RateBox";
const AboutUsSection: React.FC = () => {
  const { isRTL } = useLocalizer();

  return (
    <section className=" grid grid-cols-1 lg:grid-cols-2 my-10 gap-6">
      <Intro />
      <div className="relative flex flex-col gap-4">
        <Quote
          className={cn(
            "text-gray-300 absolute opacity-30 -z-1 -top-10",
            isRTL ? "-right-6" : "-left-6 rotate-y-180"
          )}
          size={150}
        />
        <p className="lg:!text-xl">
          {
            isRTL ? `        ببالغ السرور والسعادة، نرحب بكم في بوابتكم العقارية الأولى التي تفتح
          لكم آفاقاً واسعةً من الفرص والإمكانيات في عالم الاستثمار والعقارات. إن
          زيارتكم اليوم ليست مجرد تصفح عابر، بل هي بداية رحلة مثيرة نحو اكتشاف
          عالم مليء بالخيارات الواعدة التي تلبي طموحاتكم وتتجاوز توقعاتكم. في
          موقعنا، نؤمن بأن كل زائر يحمل حلمه الخاص، سواء كان البحث عن منزل
          العائلة الأول، أو الاستثمار في عقار ذي عائد مجزٍ، أو حتى العثور على
          تلك المساحة التجارية المثالية التي تمثل انطلاقة المشروع الناجح. لذلك،
          حرصنا على تصميم منصة سهلة الاستخدام وغنية بالمحتوى الذي يضع بين أيديكم
          أحدث العروض العقارية المتميزة في مختلف المناطق والمدن. نفخر بأننا لا
          نقدم مجرد قوائم عقارية جافة، بل نقدم حلولاً متكاملة مصممة خصيصاً
          لمساعدتكم في كل خطوة من رحلتكم العقارية. من خلال فريقنا من الخبراء
          والمستشارين المتخصصين، نسعى جاهدين لتقديم الإرشاد والدعم الذي تحتاجونه
          لاتخاذ القرارات المدروسة التي تناسب متطلباتكم وميزانياتكم. نحن هنا
          لنجعل حلمكم العقاري حقيقة واقعة، ونعدكم بتجربة استثنائية تتميز
          بالمصداقية والشفافية والاحترافية. تصفحوا موقعنا بحرية، واستفيدوا من
          أدواتنا الذكية التي صممت لتسهيل عملية البحث والموازنة بين الخيارات
          المتاحة. مرحباً بكم في عالم من الفرص غير المحدودة، حيث يبدأ كل حلم
          عقاري برحلة ناجحة معنا. شكراً لثقتكم، ونتمنى لكم تجربة ممتعة ومفيدة في
          موقعنا.` : `        With great pleasure and happiness, we welcome you to your first real estate portal, which opens up
          a wide range of opportunities and possibilities in the world of investment and real estate. Your
          visit today is not just a passing browse, but the beginning of an exciting journey towards discovering
          a world full of promising options that meet your ambitions and exceed your expectations. At
          our site, we believe that every visitor has their own dream, whether it is searching for their
          first family home, investing in a property with a lucrative return, or even finding
          that ideal commercial space that represents the launch of a successful project. Therefore,
          we have designed an easy-to-use platform rich in content that puts the
          latest premium real estate offers in various regions and cities at your fingertips. We pride ourselves on not
          just providing dry real estate listings, but offering integrated solutions tailored
          to assist you every step of your real estate journey. Through our team of experts
and specialized consultants, we strive to provide the guidance and support you need
to make informed decisions that suit your requirements and budgets. We are here
          to make your real estate dream a reality, and we promise you an exceptional experience characterized
          by credibility, transparency, and professionalism. Feel free to browse our website and take advantage of
          our smart tools designed to facilitate the search process and help you weigh the available options
          . Welcome to a world of unlimited opportunities, where every real estate dream
          begins with a successful journey with us. Thank you for your trust, and we wish you an enjoyable and rewarding experience on
          our website.`
          }
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
          <RateBox key={1} rateValue={150} text={isRTL ? "مشروع" : "Projects"} />
          <RateBox key={2} rateValue={200} text={isRTL ? "عميل" : "Clients"} />
          <RateBox key={3} rateValue={300} text={isRTL ? "شقة" : "Apartment"} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

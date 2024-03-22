import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  CurrencyRupeeIcon,
  HomeIcon,
  PhoneIcon,
  MapPinIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/2.jpeg";
import benefitTwoImg from "../public/3.jpeg";
import benefitThreeImg from "../public/4.jpeg";

const benefitOne = {
  title: "Product",
  desc: "STITCHSWIFT acts as a bridge between discerning customers and a network of highly skilled tailors renowned for their expertise",
  image: benefitOneImg,
  bullets: [
    {
      title: "User-Friendly Interface",
      desc: "Guides customers through a journey of self-expression and style customization",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Advanced Design Tools",
      desc: "Empower users to explore an extensive range of fabrics, styles, and embellishments, enabling them to curate garments that reflect their unique personalities and preferences",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Commitment to quality craftsmanship",
      desc: "Ensures that every garment is meticulously crafted, with precise measurements and attention to detail, resulting in a finished product that exceeds expectations.",
      icon: <SparklesIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Services",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Doorstep Measurement",
      desc: "Depending on the customer’s area, requirement and budget, we assign a partner and connect them directly to the customer",
      icon: <HomeIcon />,
    },
    {
      title: "On-call deisgner consultation",
      desc: "We’ve partnered with 100+ tailors, designers and boutiques across Bangalore",
      icon: <PhoneIcon />,
    },
    {
      title: "Ensure customer satisfaction",
      desc: "Maintaining high-quality craftsmanship and timely delivery",
      icon: <SparklesIcon />,
    },
  ],
};


const benefitThree = {
  title: "Mission",
  desc: "",
  image: benefitThreeImg,
  bullets: [
    {
      title: "User-friendly platform",
      desc: "To connect users with skilled tailors, offering a wide range of tailoring services and materials.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Reduce Costs",
      desc: "Reduce the cost and inconvenience associated with traditional tailoring methods",
      icon: <CurrencyRupeeIcon />,
    },
    {
      title: "Live order tracking",
      desc: "We also offer express delivery wherever applicable",
      icon: <MapPinIcon />,
    },
  ],
};


export { benefitOne, benefitTwo, benefitThree };

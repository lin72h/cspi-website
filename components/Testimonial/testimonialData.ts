import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Michael Johnson",
    designation: "CEO, Auckland Retail Group",
    image: image1,
    content:
      "CSPI Consultants transformed our financial operations. Their strategic advice helped us optimize our tax position while ensuring full compliance. We've saved thousands in taxes and gained clarity on our financial direction.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    designation: "Director, Wellington Property Investments",
    image: image2,
    content:
      "Working with CSPI has been instrumental to our growth. Their expertise in property accounting and tax legislation has helped us structure our investments efficiently. Their proactive advice consistently exceeds our expectations.",
  },
  {
    id: 3,
    name: "David Chen",
    designation: "Founder, TechNZ Solutions",
    image: image1,
    content:
      "As a tech startup, we needed accountants who understand our unique challenges. CSPI provided valuable guidance on R&D tax incentives and growth strategies. Their support has been crucial during our expansion phase.",
  },
  {
    id: 4,
    name: "Emma Thompson",
    designation: "Owner, Coastal Hospitality Group",
    image: image2,
    content:
      "CSPI's industry-specific knowledge of hospitality accounting has been invaluable. Their cash flow management strategies helped us navigate seasonal fluctuations, and their tax planning has improved our bottom line significantly.",
  },
];

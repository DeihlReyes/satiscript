import {
  LayoutDashboard,
  PhoneForwarded,
  Settings,
  ChevronUp,
  TrendingUp,
  Headset,
  BrainCircuit,
} from "lucide-react";
import steph from "@/public/assets/steph.jpg";
import paul from "@/public/assets/paul.jpg";
import deihl from "@/public/assets/arron.jpg";
import ynzon from "@/public/assets/roy.jpg";

export const headerLinks = [
  {
    label: "FEATURES",
    route: "#features",
  },
  {
    label: "RESEARCHERS",
    route: "#researchers",
  },
  {
    label: "Satiscript",
    route: "#",
  },
  {
    label: "DEMO",
    route: "#demo",
  },
];

export const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Call Logs",
    icon: PhoneForwarded,
    href: "/call-logs",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default routes;

export const features = [
  {
    title: "Real-time Emotion Detection",
    description:
      "Detect the emotion of your customers in real-time and know if an agent is doing a good job or not.",
    icon: ChevronUp,
  },
  {
    title: "Increase Customer Satisfaction",
    description:
      "Level up customer satisfaction with Satiscript's emotion detection system.",
    icon: TrendingUp,
  },
  {
    title: "Determine Agent Performance",
    description:
      "Know if an agent is doing a good job or not by analyzing the emotion of your customers.",
    icon: Headset,
  },
  {
    title: "Script Recommendations",
    description:
      "Get script recommendations using openAI API based on the emotion and words of your customers.",
    icon: BrainCircuit,
  },
];

export const team = [
  {
    name: "Stephanie Mae Canilang",
    image: steph,
  },
  {
    name: "Paul Bowen Ramos",
    image: paul,
  },
  {
    name: "Deihl Arron Reyes",
    image: deihl,
  },
  {
    name: "Roy Ryan Ynzon",
    image: ynzon,
  },
];

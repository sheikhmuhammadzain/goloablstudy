import { IconType } from "react-icons";

export interface Feature {
  title: string;
  description: string;
  icon: IconType;
}

export interface Destination {
  country: string;
  description: string;
  image: string;
  flagEmoji: string;
}

export interface University {
  name: string;
  logo: string;
}

export interface Stat {
  value: string;
  label: string;
}
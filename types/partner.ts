export type PartnerType =
  | "institution"
  | "ngo"
  | "university"
  | "business"
  | "donor";

export interface Partner {
  id: string;
  name: string;
  country: "Germany" | "Cameroon" | "International";
  type: PartnerType;
  description: string;
  websiteUrl?: string;
  logoUrl?: string;
  verified: boolean;
}

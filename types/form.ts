import { FocusAreaId } from "./site";

export interface PartnershipFormData {
  fullName: string;
  organization: string;
  country: string;
  email: string;
  organizationType:
    | "institution"
    | "ngo"
    | "business"
    | "donor"
    | "individual"
    | "other";
  focusArea: FocusAreaId | "multi-sector";
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  category: "general" | "partnership" | "donation" | "volunteer" | "media";
  subject: string;
  message: string;
}

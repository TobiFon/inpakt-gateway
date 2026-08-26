import { CONTACT_INFO, SOCIAL_LINKS } from "../lib/constants";
import { SiteMeta } from "../types/site";

export const siteMeta: SiteMeta = {
  name: "Impakt Gateway e.V.",
  legalName: "Impakt Gateway e.V.",
  registrationCountry: "Germany",
  primaryEmail: CONTACT_INFO.email,
  socials: {
    linkedin: SOCIAL_LINKS.linkedin,
    facebook: SOCIAL_LINKS.facebook,
    instagram: SOCIAL_LINKS.instagram,
  },
};

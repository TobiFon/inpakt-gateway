import { DonationConfig } from "@/types/donation";

/**
 * Central Donation Configuration
 * Edit bank details, PayPal endpoints, and legal donation attributes here in a single place.
 */
export const donationConfig: DonationConfig = {
  organizationName: "Impakt Gateway e.V.",
  registrationStatus: "Eingetragener Verein (e.V.) – Germany",
  bank: {
    accountHolder: "Impakt Gateway e.V.",
    bankName: "GLS Bank / EthikBank (In Setup)",
    iban: "DE00 0000 0000 0000 0000 00",
    bic: "GENODEM1GLS",
    referencePrefix: "Spende / Donation - Impakt Gateway",
  },
  paypalEmail: "donate@impakt-gateway.org",
  paypalDonationUrl: "https://paypal.me/impaktgateway",
  taxDeductibleGermany: true,
};

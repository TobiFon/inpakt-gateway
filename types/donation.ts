export interface BankDetails {
  accountHolder: string;
  bankName: string;
  iban: string;
  bic: string;
  referencePrefix: string;
}

export interface DonationConfig {
  organizationName: string;
  registrationStatus: string;
  bank: BankDetails;
  paypalEmail?: string;
  paypalDonationUrl?: string;
  taxDeductibleGermany: boolean;
}

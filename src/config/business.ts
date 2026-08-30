export const business = {
  name: "GM Carpentry & Construction",
  shortName: "GM Carpentry",
  domain: "https://gmcarpentry.ie",
  tagline: "There's another room above you.",
  description:
    "Dublin attic conversion specialists. GM Carpentry & Construction transforms unused roof space into bedrooms, offices, en-suites and living rooms — and takes on extensions, renovations and carpentry.",
  phone: process.env.NEXT_PUBLIC_PHONE || "087 615 9429",
  email: process.env.NEXT_PUBLIC_EMAIL || "info@gmcarpentry.ie",
  contactEmail: process.env.CONTACT_TO_EMAIL || "info@gmcarpentry.ie",
  address: {
    street: "Priest Town",
    locality: "Kilbride",
    area: "Dublin 15",
    region: "Co. Dublin",
    country: "IE",
    countryName: "Ireland",
    display: "Priest Town, Kilbride, Dublin 15",
  },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Priest%20Town%20Kilbride%20Dublin%2015",
  googleReviewsUrl:
    "https://www.google.com/search?q=GM+Carpentry+%26+Construction#lrd=0x48676d5471505f81:0x123fb7c357b91b95,1",
  social: {
    facebook: "https://www.facebook.com/people/Gm-Carpentry-Construction/100063498672550/",
    twitter: "https://x.com/Gmcarpentry2",
  },
  locale: "en-IE",
} as const;

export function telHref() {
  return `tel:${business.phone.replace(/\s+/g, "")}`;
}

export function mailtoHref() {
  return `mailto:${business.email}`;
}

export function displayPhone() {
  return business.phone;
}

export function displayEmail() {
  return business.email;
}

export function displayAddress() {
  return business.address.display;
}

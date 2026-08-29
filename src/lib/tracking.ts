// Google Ads Conversion Tracking Helper for AR FRI Climatização

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const trackWhatsAppConversion = () => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18416024511/gD9VCPnrk-ocEL_3uM1E",
    });
  }
};

export const trackPhoneConversion = () => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18416024511/x8QFCN7rk-ocEL_3uM1E",
    });
  }
};

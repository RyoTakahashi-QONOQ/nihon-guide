export const AFFILIATE = {
  booking: (city: string) =>
    `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}&aid=YOUR_BOOKING_AID&lang=en-us`,
  klook: (q: string) =>
    `https://www.klook.com/en-US/search/?query=${encodeURIComponent(q)}&aff_adid=YOUR_KLOOK_ID`,
  airbnb: (q: string) =>
    `https://www.airbnb.com/s/${encodeURIComponent(q)}/homes`,
};

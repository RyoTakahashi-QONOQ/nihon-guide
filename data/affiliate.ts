export const bookingUrl = (city: string) =>
  `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}&lang=en-us`;

export const klookUrl = (q: string) =>
  `https://www.klook.com/en-US/search/?query=${encodeURIComponent(q)}`;

export const airbnbUrl = (q: string) =>
  `https://www.airbnb.com/s/${encodeURIComponent(q)}/homes`;

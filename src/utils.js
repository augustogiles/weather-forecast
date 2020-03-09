export const colorsWheaters = {
  sn: "#1daaf1",
  sl: "#35586c",
  h: "#5d92b1	",
  t: "#2d3656",
  hr: "#838B8B",
  lr: "#C1CDCD",
  s: "#20639b",
  hc: "#a7a69d",
  lc: "#c0c0c0",
  c: "#1ebdd0",
};

export const countries = [
  {
    name: "Lisbon",
    woeid: 742676
  },
  {
    name: "London",
    woeid: 44418
  },
  {
    name: "New York",
    woeid: 2459115
  },
  {
    name: "São Paulo",
    woeid: 455827
  },
];

export function getDayOfWeek(dateStr){
  return dayStr[new Date(dateStr).getDay()];
};

const dayStr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export interface NewCarProps {
  id: string;
  model: string;
  manufacturer: string;
  year: number;
  color: string;
}

export const carsData: NewCarProps[] = [
  {
    id: "c5579f10-474b-47bd-9203-c9e59056fd95",
    model: "Civic",
    manufacturer: "Honda",
    year: 2018,
    color: "#CE6D00",
  },
  {
    id: "cf0eb2e3-b3a3-41c5-a212-f06872edd233",
    model: "Camry",
    manufacturer: "Toyota",
    year: 2017,
    color: "#4CCF1A",
  },
  {
    id: "dafb4ca6-f94d-48aa-89e5-3b2b7678cc11",
    model: "Corolla",
    manufacturer: "Toyota",
    year: 2016,
    color: "#898989",
  },
  {
    id: "0e525123-7f65-4d1b-9884-0db4fd649b19",
    model: "Accord",
    manufacturer: "Honda",
    year: 2015,
    color: "#342E46",
  },
  {
    id: "c5f2e9dd-811d-4ad6-b508-39cabc27ec0d",
    model: "Fusion",
    manufacturer: "Ford",
    year: 2014,
    color: "#0D0621",
  },
  {
    id: "d5dcd118-fa7e-49f9-aedb-2c7a22fec95d",
    model: "Altima",
    manufacturer: "Nissan",
    year: 2013,
    color: "#AF1B69",
  },
  {
    id: "f44a2107-0d13-43b9-b727-7d7ce4394781",
    model: "Malibu",
    manufacturer: "Chevrolet",
    year: 2012,
    color: "#FF0187",
  },
  {
    id: "422f1c2a-e0e3-4fe1-8056-94c98579186f",
    model: "Cruze",
    manufacturer: "Chevrolet",
    year: 2011,
    color: "#6D4C5E",
  },
  {
    id: "48d0b872-f12c-4a91-b3fb-c75174e9b8fb",
    model: "Fiesta",
    manufacturer: "Ford",
    year: 2010,
    color: "#3F1B87",
  },
  {
    id: "2cc9bd61-7de0-48ad-90d8-dd46bb1ecc05",
    model: "Sentra",
    manufacturer: "Nissan",
    year: 2009,
    color: "#EC0954",
  },
];

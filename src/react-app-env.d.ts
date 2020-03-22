// eslint-disable-next-line
/// <reference types="react-scripts" />

interface User {
  userId: number;
  name: string;
  email: string;
  block: boolean;
  signInDate: string;
  lastActivity: string;
  lastAction: string;
  product: string;
}


interface Ru {
  firstDayOfWeek: number;
  dayNames: string[];
  dayNamesShort: string[];
  dayNamesMin: string[];
  monthNames: string[];
  monthNamesShort: string[];
  today: string;
  clear: string;
  dateFormat: string;
  weekHeader: string;
}

interface FilterParams {
  filterField: string;
  startDate: Date;
  endDate: Date;
}

interface CustomDate {
  day: number;
  month: number;
  year: number;
  today: boolean;
  selectable: boolean;
}

interface Option {
  value: string;
  label: string;
}

import moment from 'moment';

export const allTime = () => new Date(moment.unix(0).toString());
export const yesterday = () => moment().add(-1, 'day').startOf('day').toString();
export const lastWeek = () => moment().add(-7, 'day').startOf('day').toString();
export const lastThirtyDays = () => moment().add(-30, 'day').startOf('day').toString();
export const thisMonth = () => moment().startOf('month').toString();
export const lastDayLastMonth = () => moment().add(-1, 'month').endOf('month').toString();
export const lastMonth = () => moment().add(-1, 'month').startOf('month').toString();
export const now = () => new Date(moment().endOf('day').toString());

export const ru: Ru = {
  firstDayOfWeek: 1,
  dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthNamesShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
  today: 'Hoy',
  clear: 'Limpiar',
  dateFormat: 'dd/mm/yy',
  weekHeader: 'Sm',
};


export const dateIntervals = [
  { label: 'allTime', value: 'Весь срок' },
  { label: 'today', value: 'Сегодня' },
  { label: 'yesterday', value: 'Вчера' },
  { label: 'lastWeek', value: 'Последние 7 дней' },
  { label: 'lastThirtyDays', value: 'Последние 30 дней' },
  { label: 'thisMonth', value: 'В этом месяце' },
  { label: 'lastMonth', value: 'Прошлый месяц' },
  { label: 'customInterval', value: 'Свой вариант' },
];

export const filterOptions = [
  { label: 'lastActivity', value: 'По дате последней активности' },
  { label: 'signUpDay', value: 'По дате регистрации' },
];

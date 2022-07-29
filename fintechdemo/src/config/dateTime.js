import moment from "moment";

export const dateTime = {
  serviceDateFormat: 'YYYY-MMM-D',

  localDateFormat: 'MMMM DD YYYY',
  localDateFormat1: 'DD MMM YYYY',
  
  localTimeFormat: 'MMMM DD YYYY hh:mm A',
  localOnlyTimeFormat: 'hh:mm A',

  localFieldDate: 'DD-MM-YYYY'
};

export const toServerDateConvertion = (date) => {
  return moment(moment(date, dateTime.localFieldDate).toDate()).format(dateTime.serviceDateFormat);
}
export const toLocalDateConvertion = (date) => {
  return moment(moment(date, dateTime.serviceDateFormat).toDate()).format(dateTime.localFieldDate);
}

export const secondsToLocalTime = (seconds) => {
  return moment.utc(seconds*1000).format('HH:mm:ss');
}
export const secondsToMin = (seconds) => {
  return moment.utc(seconds*1000).format('m:ss');
}

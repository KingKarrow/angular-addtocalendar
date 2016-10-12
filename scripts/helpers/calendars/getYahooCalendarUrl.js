import getHoursDuration from '../getHoursDuration';

const getYahooCalendarUrl = data => {
  let yahooCalendarUrl = 'http://calendar.yahoo.com/?v=60&view=d&type=20';
  let duration = getHoursDuration(data.startDate, data.endDate);

  yahooCalendarUrl += '&TITLE=' + data.title;
  yahooCalendarUrl += '&ST=' + data.startDate + '&DUR=' + duration;
  yahooCalendarUrl += '&DESC=' + data.description;
  yahooCalendarUrl += '&in_loc=' + data.location;

  return yahooCalendarUrl;
}

export default getYahooCalendarUrl;
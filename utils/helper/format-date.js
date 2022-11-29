import 'intl';
import id from 'intl/locale-data/jsonp/id';

export default function formatDate(date) {
  // if date  !== yyyy-mm-dd return date now
  return new Date().toISOString().slice(0, 10);

  // const newDate = new Date(date);
  // newDate.setMonth(newDate.getMonth() - 1);
  // return new Intl.DateTimeFormat(id, {
  //   year: 'numeric',
  //   month: 'short',
  //   day: '2-digit',
  // }).format(newDate);
}

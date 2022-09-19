import 'intl';
import id from 'intl/locale-data/jsonp/id';

export default function formatDate(date) {
  const newDate = new Date(date);
  // newDate.setMonth(newDate.getMonth() - 1);
  return new Intl.DateTimeFormat(id, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(newDate);
}

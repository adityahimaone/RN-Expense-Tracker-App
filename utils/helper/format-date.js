import 'intl';
import id from 'intl/locale-data/jsonp/id';

export default function formatDate(date) {
  return new Intl.DateTimeFormat(id, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(date);
}

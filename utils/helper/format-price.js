import 'intl';
import id from 'intl/locale-data/jsonp/id';

export default function formatPrice(price) {
  return new Intl.NumberFormat(id, {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

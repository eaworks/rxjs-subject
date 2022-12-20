import { Subject } from 'rxjs';
// burada subscribe dan sonraki degerleri basar
const sub = new Subject();
sub.next(1);
sub.subscribe((x) => {
  console.log('Subscriber A', x);
});
sub.next(2);
sub.subscribe((x) => {
  console.log('Subscriber B', x);
});
sub.next(3);

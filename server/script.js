import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  stages: [
    { duration: '30s', target: 1000 },
    { duration: '60', target: 1000 },
    { duration: '15', target: 1000 },
  ]

};
export default function () {
  http.get('http://localhost:3003/api/questions');
  sleep(1);
}

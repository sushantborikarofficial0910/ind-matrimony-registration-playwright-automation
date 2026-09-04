import http from 'k6/http';
import { check } from 'k6';

export const options = {

    vus: 50,

    duration: '30s',

};

export default function () {

    const payload = JSON.stringify({

        email: 'test@gmail.com',

        password: '123456'

    });

    const params = {

        headers: {

            'Content-Type': 'application/json'

        }

    };

    const response = http.post(

        'https://api.demo.com/login',

        payload,

        params

    );

    check(response, {

        'Status 200': (r) => r.status === 200,

    });

}
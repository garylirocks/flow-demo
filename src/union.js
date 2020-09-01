/* @flow */
/* eslint-disable */

type Success = {| success: true, value: boolean |};
type Failed  = {| error: true, message: string |};

type Response = Array<Success | Failed>;

function handleResponse(response: Response) {
    response.forEach(r => {
        if (r.success) {
            var value: boolean = r.value;
        } else {
            var message: string = r.message;
        }
    });
}
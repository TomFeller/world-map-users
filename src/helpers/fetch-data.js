import Swal from 'sweetalert2';
// import "./swal.scss";
import _ from "lodash"

const API = "http://13.69.54.84:9000/users";

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-start',
    showConfirmButton: false,
    timer: 3000,
    customClass: "swal-container"
});

export const GET = "GET";
export const POST = "POST";
export const DELETE = "DELETE";

export const fetchData = async (
    method = GET,
    data = {},
    successHandler = success => console.log(success),
    errorHandler = error => console.log(error),
    swalData,
) => {


    const HEADERS = {
        "Content-Type": "application/json; charset=utf-8",
    };
    const BODY = JSON.stringify(data);
    const METHOD = method.toUpperCase();


    const fetchData = (
        METHOD === GET || METHOD === DELETE ?
            {method: METHOD, headers: HEADERS} :
            {method: METHOD, body: BODY, headers: HEADERS}
    );
    await fetch(
        API,
        fetchData
    ).then(
        response => {
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            return response.json()
        }
    ).then(success => {
            if(!_.isEmpty(swalData)){
                Toast.fire({
                    title: swalData.successTitle
                })
            }

            successHandler(success);
        }
    ).catch(error => {
            if(!_.isEmpty(swalData)){
                Toast.fire({
                    title: swalData.failTitle
                })
            }
            errorHandler(error)
        }
    );
};
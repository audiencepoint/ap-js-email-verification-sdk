const API_URL = 'https://api.audiencepoint.com/v1/stg-email-verification';

export default class APVerificationAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    verifyEmail(email) {
        let url = `${API_URL}?email=${email}`;

        var xhr = new XMLHttpRequest();
/*
        xhr.onreadystatechange = function() {
            if (this.readyState == 4){
                if ( this.status == 200) {
                    return this.responseText.json();
                }
                else {
                    throw new ApiError(this.status, this.statusText);
                }
            } 
         };
*/
        xhr.open("GET", url, false);
        xhr.setRequestHeader("x-api-key", this.apiKey)
        xhr.send();
        if (xhr.status == 200) {
            return JSON.parse(xhr.responseText);
        } else {
            throw new ApiError(xhr.status, xhr.statusText);
        }
    }
}

// Custom API error to throw
function ApiError(status, message) {
    this.status = status;
    this.message = message;
}
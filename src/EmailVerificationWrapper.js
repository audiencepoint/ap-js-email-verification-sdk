const API_URL = 'https://api.audiencepoint.com/v1/stg-email-verification';

export default class APVerificationAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    verifyEmail(email) {

        const options = {
            method: 'GET',
            headers: {
                'x-api-key': this.apiKey
            },
        };

        let response = null;
        let url = `${API_URL}?email=${email}`;

        return fetch(url, options)
            .then(responseObject => {
                // Saving response for later use in lower scopes
                response = responseObject;

                // Check for error HTTP error codes
                if (response.status != 200) {
                    // Get response as text
                    throw 'http error';
                }

                // Get response as json
                return response.json();
            })
            .catch(error => {
                // Throw custom API error
                // If response exists it means HTTP error occured
                if (response) {
                    throw new ApiError(`Request failed with status ${response.status}.`, response.status);
                } else {
                    throw new ApiError(error.toString(), null, 'REQUEST_FAILED');
                }
            });
    }
}

// Custom API error to throw
function ApiError(message, status) {
    this.message = message;
    this.status = status;
}
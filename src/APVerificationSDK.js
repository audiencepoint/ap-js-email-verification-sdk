const API_URL = 'https://api.audiencepoint.com/v1/email-verification';

class APVerificationSDK {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    verifyEmail(email) {
        const options = {
            method: 'POST',
            headers: {
                'x-api-key': this.apiKey,
                'Content-Type': "application/json",
                'Accept': "*/*"
            },
            body: `{"email": "${email}"}`,
        };

        let response = null;

        return fetch(API_URL, options)
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
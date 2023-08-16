AudiencePoint Javascript Email Verification API

This is a JavaScript wrapper class for the AP Email Verification API

More information about this API and our others can be found [here](https://docs.audiencepoint.com/)

## DOWNLOAD

To get started, download this repo, or just the APVerificationSDK.js file from `/src` if you don't need the html form usage example.

## USAGE

Add the script:

```HTML
<script src="<PATH_TO_SCRIPT/APVerificationSDK.js"></script>
```

Initialize the sdk with your api key:

```HTML
<script>
const verificationAPI = new APVerificationSDK("<YOUR_API_KEY>");
</script>
```

## EXAMPLES

Validate and verify an email address:

```javascript
const email = "<EMAIL_ADDRESS>"; // The email address you want to validate

verificationAPI.verifyEmail(email)
                .then(res => {
                    console.log(res.Email);
                    console.log(res.Result);
                    if (res.Suggestion != null)
                        console.log(res.Suggestion);
                })
                .catch(error => {
                    console.log(error.message);
                    console.log(error.status);
                });

```

We also provide an example of usage in a simple HTML form. The example HTML file can be found in this repo at `/examples/index.html`
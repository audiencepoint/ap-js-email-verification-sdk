import APVerificationAPI from '../src/EmailVerificationWrapper.js';

const verificationAPI = new APVerificationAPI('123:RandomTestKey1c0qw8ejv890qev9');

verificationAPI.verifyEmail('developers@audeincepoint.com')
    .then(res => {
        console.log(res.Email);
        console.log(res.Result);
        console.log(res.Suggestion);
    })
    .catch(error => {
        console.log(error.status);
        console.log(error.message);
    })
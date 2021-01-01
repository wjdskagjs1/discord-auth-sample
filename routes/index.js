var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const { auth_link, client_id, client_secret }= require('../config.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { auth_link: auth_link });
});
router.get('/auth', async (req, res)=>{
    const accessCode = req.query.code;

	let params = new URLSearchParams();
	params.append('client_id', client_id);
	params.append('client_secret', client_secret);
	params.append('code', accessCode);
	params.append('grant_type', 'authorization_code');
    params.append('scope', ['identify', 'guilds']);
	params.append('redirect_uri', `http://127.0.0.1:3000/auth`); //redirect uri must be matched

	await fetch('https://discordapp.com/api/oauth2/token', {
        method: 'POST',
        body: params,
    })
    .then(response => {
        response.json().then(async (tokens)=>{
            const { token_type, access_token } = tokens
            res.session.vaild = 
            res.redirect(`http://127.0.0.1:3000/?token_type=${token_type}&access_token=${access_token}`);
        })
    })
    .catch(error => {
        console.log(`So... this just happen: ${error}`);
    });
});

module.exports = router;

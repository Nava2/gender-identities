#JSON Gender Identities

Facebook <a href = "http://abcnews.go.com/blogs/headlines/2014/02/heres-a-list-of-58-gender-options-for-facebook-users/">recently did something cool</a> and expanded the ways a user could identify their gender on the site.

The whole internet should be doing this, and I'm not totally sure about the most proper way of rolling out such functionality, but for now here are some JSON objects that contain gender identies (`identities.json`) and pronound (`pronouns.json`). I will be adding example HTML&JS for examples on how to roll out this functionality on your website/sign up form/etc. <strong>This just in: </strong>I also added CSON as well.

I'm not very familiar with manipulating data on the web, so if I'm doing something wrong please tell me :)

## Node.js

1. Simply install via npm: `npm install gender-identities --save`.
2. Then require: `var gidentities = require('gender-identities');`
3. Use: `console.log(gidentities.identities);`

##Can I Contribute?
**Please!!!**<br>

If I'm missing an identitiy, pronoun, or when the example code comes around please feel encouraged modify or improve any of the code in this repositoy!

Other things that need improvement:
* The example scrips can always be improved and added for new technologies
* Aside from JSON and CSON, you can fork and add functionality to other platforms
* The <a href = "http://evinugur.com/gender-identities">landing page</a> is always welcome for some improvement


##Donation
If you like this project and what it stands for, please consider donating some <a href = "educoin.cc">EDU Coins</a> to help fund my college education.
My receiving address is: `6Lq1BtS6hatqEpxtzcvLH42qCr6EjyvzLM`<br>
<img src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=6Lq1BtS6hatqEpxtzcvLH42qCr6EjyvzLM">
 
##Usage
Please use this however and wherever you want. There's some simple examples on my site demoing a basic dropdown control with the HTML `select` element at this <a href = "https://evinugur.com/gender-identities">link</a>.

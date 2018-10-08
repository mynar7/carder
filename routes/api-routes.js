const router = require('express').Router();

var vCard = require('vcards-js');

//create a new vCard
vCard = vCard();

//set properties
vCard.firstName = 'Eric';
vCard.middleName = 'J';
vCard.lastName = 'Nesser';
vCard.organization = 'ACME Corporation';
vCard.photo.attachFromUrl('https://avatars2.githubusercontent.com/u/5659221?v=3&s=460', 'JPEG');
vCard.workPhone = '312-555-1212';
vCard.birthday = new Date('01-01-1985');
vCard.title = 'Software Developer';
vCard.url = 'https://github.com/enesser';
vCard.note = 'Notes on Eric';

router.get('/card', function(req, res) {
    res.set('Content-Type', 'text/vcard; name="enesser.vcf"');
    res.set('Content-Disposition', 'inline; filename="enesser.vcf"');
    res.send(vCard.getFormattedString());
});

module.exports = router;


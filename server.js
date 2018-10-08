const vcard = require('vcard-generator');
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/card', function(req, res) {
    res.type('vcf')
    res.send(vcardContent);
});

const vcardContent = vcard.generate({
    name: {
      familyName: 'Doe',
      givenName: 'John',
      middleName: 'Philip',
      prefix: 'Dr.',
      suffix: 'Jr.',
    },
    // formattedNames: [{
    //   text: 'Mr. Johny',
    // }],
    // nicknames: [{
    //   text: 'Phil',
    // }],
    // extraName: {
    //   maidenName: 'MaidenName',
    //   phoneticFirstName: 'PhoneticFirstName',
    //   phoneticMiddleName: 'PhoneticMiddleName',
    //   phoneticLastName: 'PhoneticLastName',

    //   pronunciationFirstName: 'PronunciationFirstName',
    //   pronunciationMiddleName: 'PronunciationMiddleName',
    //   pronunciationLastName: 'PronunciationLastName',
    // },

    works: [{
      organization: 'My Company, Inc.',
      title: 'CEO',
      role: 'Executive',
    }],
    emails: [{
      type: 'work',
      text: 'john@mycompany.com',
    }, {
      type: 'home',
      text: 'johndoe@example.com',
    }],
    phones: [{
      type: 'work',
      text: '1 (234) 567-8901',
    }, {
      text: '(123) 123-1234',
    }, {
      uri: 'tel:1234567890',
    }],
    addresses: [{
      type: 'work',
      street: '123 Forbes Ave, Apt 1',
      locality: 'San Francisco',
      region: 'CA',
      code: '12345',
      country: 'USA',
    }, {
      type: 'home',
      street: '456 Home St',
      locality: 'Homeland',
      region: 'CA',
      code: '23456',
      country: 'USA',
    }],
    // socialProfiles: [{
    //   type: 'facebook',
    //   uri: 'http://www.facebook.com/johndoe',
    // }, {
    //   type: 'twitter',
    //   user: 'johnie',
    // }],
    urls: [{
      type: 'internet',
      uri: 'http://www.mycompany.com',
    }, {
      type: 'personal',
      uri: 'http://www.johndoe.com',
    }],

    photos: [{
      type: 'work',
      uri: 'https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg',
    }, {
      type: 'home',
      dataUri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
    }],

    birthday: {
      year: 2000,
      month: 1,
      day: 31,
    },
    // gender: {
    //   sex: 'male',
    // },
    // notes: [{
    //   text: 'John Doe has a long and varied history, being documented on more police files that anyone else.\nReports of his death are alas numerous.',
    // }, {
    //   text: 'Another note.',
    // }],
  });

  app.listen(PORT, function() {
      console.log('app listening on PORT http://localhost:' + PORT);
  })
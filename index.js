const osmosis = require('osmosis');
const fs = require('fs');

let savedData = [];

osmosis
   .get('http://www.sql.ru/forum/job')
   .find('.forumTable')
   .set({
       'related': ['.altCol a'],
       'add': ['.postslisttopic > a']
    })
    
   .data(function(data) {
    console.log(data);
    savedData.push(data);
 })
 .log(console.log) 
 .error(console.error) 
 .done(function() {
    fs.writeFile('data.json', JSON.stringify( savedData, null, 4), function(err) {
        
      if(err) console.error(err);
      else console.log('Data Saved to data.json file');
    })
 });

const download = require('image-downloader');

let folder = '/Users/YOURUSER/Documents/MemoryLoss/'; //YOUR FOLDER
let currentFile = 13000000; //FIRST FILE, this is from the url https://proof-blocks-mainnet.s3.amazonaws.com/13000000.png
let isDownloading = false;
let myInterval = setInterval(function() {
options = {
  url: 'https://proof-blocks-mainnet.s3.amazonaws.com/'+currentFile+'.png',
  dest: '/Users/drinkwater/Documents/MemoryLoss/'+currentFile+'.jpg',     // will be saved to /path/to/dest/photo.jpg
};
if(!isDownloading) {
isDownloading = true;
download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename); // saved to /path/to/dest/photo.jpg
    currentFile ++;
    if(currentFile > 130000255) { //LAST FILE
      clearInterval(myInterval);
    }
    isDownloading = false;
  })
  .catch((err) => console.error(err));
}
},1000);
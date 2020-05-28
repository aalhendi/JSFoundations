function getChannelName(channel) {
  return channel.name;
}

function numberOfVideos(channel) {
  return channel.videos.length;
}

// .some()
function channelHasVideo(videoTitle, channel) {
  channel.videos.forEach((vid) => {
    if (vid.title.toLowerCase() === videoTitle.toLowerCase()) return true;
  });
  return false;
}

// Hint: use .find()
function getChannelByName(channelName, channels) {
  channels.forEach((channel) => {
    if (channel.name.toLowerCase() === channelName.toLowerCase())
      return channel;
  });
  // return channels.find(ch => ch.name.toLowerCase() === channel.toLowerCase())
}

function getChannelByVideoTtitle(videoTitle, channels) {
  channels.forEach((ch) => {
    ch.videos.forEach((video) => {
      if (video.title.toLowerCase() === videoTitle.toLowerCase()) return ch;
    });
  });
}

// return list of channels whose name or description contains the keyword provided
// Hint: .contains()
function searchChannels(query, channels) {
  return channels.filter(
    (ch) =>
      ch.name.toLowerCase().contains(query.toLowerCase()) ||
      ch.description.toLowerCase().contains(query.toLowerCase())
  );
}

function totalVideosDuration(channel) {
  let totalDuration = 0;
  channel.videos.forEach((video) => (totalDuration += video.duration));
  return totalDuration;
}

function channelWithMostContent(channels) {
  let channel = channels[0];
  channels.forEach((ch) => {
    if (totalVideoDuration(ch) > totalVideoDuration(channel)) channel = ch;
  });
  return channel;
}

function longestChannelName(channels) {
  let channel = channels[0];
  channels.forEach((ch) => {
    if (ch.name.length > channel.name.length) channel = ch;
  });
  return channel;
}

module.exports = {
  getBookById,
};

/**
 * Uncomment the following lines if you
 * want to manually test your code
 */

// const authors = require("./authors.json");
// const books = require("./books.json");

// console.log(getBookById(12, books));
// console.log(getAuthorByName("J.K. Rowling", authors));
// console.log(bookCountsByAuthor(authors));
// console.log(booksByColor(books));
// console.log(titlesByAuthorName("George R.R. Martin", authors, books));
// console.log(mostProlificAuthor(authors));
// console.log(relatedBooks(50, authors, books));
// console.log(friendliestAuthor(authors));

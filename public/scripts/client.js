
const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: timeago.format(1461116232227),
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: timeago.format(1461113959088),
  },
];


const renderTweets = function (tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweet);
    console.log($tweet);
    // takes return value and appends it to the tweets container
    $("#tweets-container").append($tweet);
  }
};

const createTweetElement = function (tweet) {
  const $tweet = $(`
      <div class="space-div">

      </div>
    <article class="my-article">
      <header class="my-header">
        <div>
          <img ${tweet.user.avatars}/>
          <span> ${tweet.user.name} </span>
        </div>
          <span class="email-color"> ${tweet.user.handle} </span>
        </header>
        <div>
          <p> ${tweet.content.text} </p>
          <hr>
        </div>
        <footer class="my-header">
          <span> ${tweet.created_at} </span>
          <div class="email-color">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-flag"></i>
            <i class="fas fa-retweet"></i>

          </div>
        </footer>
    </article>
        
         `);
  return $tweet;
};

renderTweets(data);

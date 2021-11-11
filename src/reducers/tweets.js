import posts from './data/tweets.json';

const initialState = {
    tweets: posts
}

const tweets = (state = initialState, action) => {
    switch (action.type) {
        case 'like-tweet':
            return ({
                tweets: state.tweets.map(tweet => {
                    if(tweet._id === action.tweet._id) {
                        if(tweet.liked === true) {
                            tweet.liked = false;
                            tweet.stats.likes--;
                        } else {
                            tweet.liked = true;
                            tweet.stats.likes++;
                        }
                        return tweet;
                    } else {
                        return tweet;
                    }
                })
            });
            break;
        case 'delete-tweet':
            return ({
            tweets: state.tweets.filter(tweet => tweet._id !== action.tweet._id)
        })
            // state.tweets.filter(tweet => tweet._id !== action.tweet._id)
               // tweets: state.tweets.filter(tweet => tweet._id !== action.tweet._id)

            break;
        case 'create-tweet':
            const tweet = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                "tweet": action.tweet,
                //["title" : "test", "tweet": "test"]
                "avatar-image": "https://iconape.com/wp-content/files/zk/93042/svg/react.svg",
                "logo-image": "https://iconape.com/wp-content/files/zk/93042/svg/react.svg",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },
            };
            // return ({
            //     tweets: [
            //         tweet,
            //         ...state.tweets,
            //     ]
            // });

                // {
                //     ...tweet,
                //     "tweet": action.tweet
                // },
                // tweet,
                // ...state

                    return (
                        {
                            "tweets": [
                                tweet, ...state.tweets
                            ]
                        }
                    );

            break;
        default:
            return(state);
    }
};

export default tweets;
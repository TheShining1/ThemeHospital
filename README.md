# ThemeHospital


[![Tutorial](https://i.ytimg.com/vi/SqTwYuDv1KQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBjP5YMYvw7tEQGKFfRUrTwMKSqQA)](https://www.youtube.com/playlist?list=PLbTScFtjz7tlf8ceIg4xDNTIwwdTGyfSw)


Cheat Engine table for adding interactivity to Theme Hospital with Twitch's channel points.

Line to add in queue file throught Streamer.Bot:

```
ev:disaster,arg:0,by:%user%
ev:emergency,arg:%disease%,by:%user%
ev:quake,arg:3,by:%user% // arg is severity
ev:leave,arg:0,by:%user%
ev:piss,arg:0,by:%user%
ev:VIP,arg:%score%,by:%user%
ev:vomit,arg:0,by:%user%
```

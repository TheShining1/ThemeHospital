# ThemeHospital

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=mrg6noW8zgkcHtQ2&amp;list=PLbTScFtjz7tlf8ceIg4xDNTIwwdTGyfSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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

# ThemeHospital

Cheat Engine table for adding interactivity to Theme Hospital with Twitch's channel points.

Line to add in queue file throught Streamer.Bot:

```
ev:disaster,arg:0,by:%user%
ev:emergency,arg:%disease%,by:%user%
ev:quake,arg:3,by:%user% // arg is severity
ev:VIP,arg:%score%,by:%user%
```

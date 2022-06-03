# ThemeHospital

Cheat Engine table for adding interactivity to Theme Hospital with Twitch's channel points.

Line to add in queue file throught Streamer.Bot:

```
ev:quake,arg:3,by:%user% // arg is severity
ev:VIP,arg:%score%,by:%user%
```

let queueEl = document.getElementById("queue");
let activeQueueEl = document.getElementById("activeQueue");
let queue = [];
let activeQueue = [];

let pissEls = item => `
<div class="queue-bg">
  <div class="icon">
    <img
      src="./icons/icon_piss.gif"
      alt="icon_piss"
      srcset="./icons/icon_piss.gif">
  </div>
  <div>
    <div class="item-by">${item.by}</div>
    <div class="item-name">piss off everyone, literally</div>
  </div>
</div>
`;

let vomitEls = item => `
<div class="queue-bg">
  <div class="icon">
    <img
      src="./icons/icon_vomit.gif"
      alt="icon_vomit"
      srcset="./icons/icon_vomit.gif">
  </div>
  <div>
    <div class="item-name">everyone is sick of</div>
    <div class="item-by">${item.by}</div>
  </div>
</div>
`;

let leaveEls = item => `
<div class="queue-bg">
  <div class="icon">
    <img
      src="./icons/icon_leave.gif"
      alt="icon_leave"
      srcset="./icons/icon_leave.gif">
  </div>
  <div>
    <div class="item-name">everyone is leaving because of</div>
    <div class="item-by">${item.by}</div>
  </div>
</div>
`;

let disasterEls = item => `
<div class="queue-bg">
  <div class="icon">
    <img
      src="./icons/icon_disaster.gif"
      alt="icon_disaster"
      srcset="./icons/icon_disaster.gif">
  </div>
  <div>
    <div class="item-by">${item.by}</div>
    <div class="item-name">trying to break the boiler</div>
  </div>
</div>
`;

let emergencyTypes = {
  2: "Bloaty head",
  3: "Hairyitis",
  4: "King complex",
  5: "Invisibility",
  6: "Serious radiation",
  7: "Slack tongue",
  8: "Alien DNA",
  9: "Fractured bones",
  10: "Baldness",
  12: "Jellyitis",
  15: "Transparency",
  20: "Broken heart"
};

let emergencyEls = item =>`
<div class="queue-bg">
  <div class="icon">
    <img
      src="./icons/icon_emergency.gif"
      alt="icon_emergency"
      srcset="./icons/icon_emergency.gif">
  </div>
  <div>
    <div class="item-name">Emergency: ${emergencyTypes[item.arg]}</div>
    <div class="item-by">started by ${item.by}</div>
  </div>
</div>
`;

let quakeTypes = {
  3: 'light',
  5: 'medium',
  7: 'major'
}

let quakeEls = item =>`
<div class="queue-bg">
  <div class="icon">
    <img
      src="./icons/icon_quake.gif"
      alt="icon_quake"
      srcset="./icons/icon_quake.gif">
  </div>
  <div>
    <div class="item-by">${item.by}</div>
    <div class="item-name">started ${quakeTypes[item.arg]} earthquake</div>
  </div>
</div>
`

let vipEls = item =>`
<div class="queue-bg">
  <div class="icon">
    <img
      src="./icons/icon_vip.gif"
      alt="icon_vip"
      srcset="./icons/icon_vip.gif">
  </div>
  <div>
    <div class="item-by">${item.by}</div>
    <div class="item-name">visiting the hospital</div>
  </div>
</div>
`

let eventsEls = {
  disaster: disasterEls,
  emergency: emergencyEls,
  quake: quakeEls,
  VIP: vipEls,
  piss: pissEls,
  vomit: vomitEls,
  leave: leaveEls,
};

generateQueue = () => {
  for (let line of queueData) {
    if (line == "") continue;
    lineByKey = line.split(",");
    command = {}
    for (let key of lineByKey) {
      com = key.split(":");
      command[com[0]] = com[1];
    }
    queue.push(command);
  }

  queueEl.innerHTML = queue.map(item => eventsEls[item.ev](item)).join("");
};

generateActiveQueue = () => {
  for (let line of activeQueueData) {
    if (line == "") continue;
    lineByKey = line.split(",");
    command = {}
    for (let key of lineByKey) {
      com = key.split(":");
      command[com[0]] = com[1];
    }
    activeQueue.push(command);
  }

  activeQueueEl.innerHTML = activeQueue.map(item => eventsEls[item.ev](item)).join("");
};

document.addEventListener("DOMContentLoaded", function() {
  generateQueue();
  generateActiveQueue();
});

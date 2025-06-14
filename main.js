
"use strict";
const nodeInput = {"credentials":[],"nodes":[{"n8n-node-base.emailTrigger":{"name":"Email Trigger","x":100,"y":250,"type":"n8n-node-base.emailTrigger","resourceId":null,"params":{"frequency":"daily","subject":"Daily Reminder!","text":"Don't forget to do your daily tasks.","sendAsEmailType":true,"to":"your-email@example.com"}},
{"n8n-node-base.gmail":{"name":"Gmail","x":350,"y":250,"type":"n8n-node-base.gmail","resourceId":null,"params":{"action":"sendEmail"}}}],"connections":[["n8n-node-base.emailTrigger-1","n8n-node-base.gmail-1"]]}
}
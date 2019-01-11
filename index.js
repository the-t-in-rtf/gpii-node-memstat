/*

  Run a node script while collecting memory usage information.

  Adapted from: https://stackoverflow.com/questions/44829364/monitor-maximum-memory-consumption-in-node-js-process

*/
"use strict";
var process = require("process");

var maxes = {};

process.on("exit", function () {
    console.log(JSON.stringify(maxes, null, 2));
});

process.nextTick(function () {
    var memUsage = process.memoryUsage();
    var statKey;
    for (statKey in memUsage) {
        var currVal = memUsage[statKey];
        if (currVal > (maxes[statKey] || -1)) {
            maxes[statKey] = currVal;
        }
     }
});

require(process.argv[2]);


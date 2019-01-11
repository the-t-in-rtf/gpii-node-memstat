# gpii-node-memstat

A very crude and naive script to capture max memory usage for a node process.  Adapted from
[this thread on StackExchange](https://stackoverflow.com/questions/44829364/monitor-maximum-memory-consumption-in-node-js-process),
which also mentions many other options you might consider.

## Usage

1. Checkout this repo.  It has no dependencies.
2. Run a command like: `node ./path/to/this/package/index.js ../path/to/other/package/path/to/script.js`.
3. The script will add a hook to inspect memory usage on every "tick" in Node, and another to report max usage on exit.
4. The third argument (path to script) will be `require`d by this utility.
5. When the required script exits, max memory usage will be output to the console.
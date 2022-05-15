function networkDelayTime(times, N, K) {
    //Initialize array to track times to each node from start node.
    const time = Array(N).fill(Infinity);
    //Initialize Start node to be 0 since signal begins here.
    //The -1 here and below is so node value === index value
    //in time array
    time[K - 1] = 0;
    let changed = true;
    //Iterate through signal times lowering time-to-node each iteration
    //until no changes are made to time array. Best possible
    //times to node at index from start node will then be stored 
    //in time array.
    while (changed) {
        changed = false;
        for (let [node1, node2, timeToNode] of times) {
            node1--, node2--;
            //If time to first node === Infinity, we haven't figured out
            //How to reach this node yet.  Continue until we have.
            if (time[node1] === Infinity) continue;
            if (time[node2] > time[node1] + timeToNode) {
                time[node2] = time[node1] + timeToNode;
                changed = true;
            }
        }
    }
    //Return maximum time in time array since this is how long
    //it will take for signal to reach last node.
    let res = Math.max(...time)
    //If max time is infinity, at least one node cannot be reached, return -1.
    //Else return max value from time array.
    return res === Infinity ? -1 : res;
};
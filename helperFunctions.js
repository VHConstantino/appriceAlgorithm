"use strict";

function convertToMiles(km) {
     return km * 0.000621371192;
}
function convertToKilometers(m) {
     return m * 1.609344;
}


// pseudocode for Reverse-Delete Algorithm
// function ReverseDelete(edges[] E)
//   create edge list E with all edges with their associated weights
//   sort E in decreasing order
//   Define an index i ← 0
//   while i < size(E)
//     Define edge ← E[i]
//     delete E[i]
//       if graph is not connected
//         E[i] ← edge
//         i ← i + 1
//   return edges[] E

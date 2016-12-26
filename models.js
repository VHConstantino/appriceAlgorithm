'use strict'

function Graph(){
    this.nodes = [];
    this.edges = [];
}

Graph.prototype.addNode = function (config) {
    this.nodes.push(config);
};

Graph.prototype.addEdge = function (config) {
    this.edges.push(config);
};

Graph.prototype.updatePrice = function (productIdNum, storeIdNum, newWeight) {
    for (var i = 0; i < this.edges.length; i++) {
        if(this.edges[i].productId === productIdNum && this.edges[i].storeId === storeIdNum) {
            this.edges[i].weight = newWeight
        }
    }
};

Graph.prototype.updateAvailability = function (productIdNum, storeIdNum) {
    for (var i = 0; i < this.edges.length; i++) {
        if(this.edges[i].productId === productIdNum && this.edges[i].storeId === storeIdNum) {
            this.edges.splice(i, 1)
        }
    }
};

//nodes should look like this:
// {id: 1234, name: 'wonder bread', type: 'product'} this is a product node
// {id: 236, name: 'Safeway011', type: 'store', latitude:'36.7783° N', longitude: '119.4179° W'} this is a store nodes

//edges should look like this:
// {productId: 1234, storeId: 236, weight: 2.99}
//this edge indicates that wonder bread costs 2.99 at a safeway located  at 36.7783° N & 119.4179° W

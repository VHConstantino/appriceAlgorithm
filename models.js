'use strict';

let GraphNode = require('./graphNode');
let GraphEdge = require('./graphEdge');


function Graph(){
    this.nodes = [];
    this.edges = [];
}

// Graph.prototype.initialize

Graph.prototype.addNode = function (config) {
    this.nodes.push(new GraphNode(config));
};

Graph.prototype.addEdge = function (config) {
    this.edges.push(new GraphEdge(config));
};


Graph.prototype.updatePrice = function (productIdNum, storeIdNum, newPrice) {
    for (var i = 0; i < this.edges.length; i++) {
        if(this.edges[i].productId === productIdNum && this.edges[i].storeId === storeIdNum) {
            this.edges[i].price = newPrice;
        }
    }
};

Graph.prototype.updateAvailability = function (productIdNum, storeIdNum) {
    for (var i = 0; i < this.edges.length; i++) {
        if(this.edges[i].productId === productIdNum && this.edges[i].storeId === storeIdNum) {
            this.edges.splice(i, 1);
        }
    }
};


Graph.prototype.findAvailableProducts = function(storeIdNum, productIdNum) {
  let availableProducts = [];

  for (let i = 0; i < this.edges.length; i ++){
    if (this.edges[i].storeId === storeIdNum && this.edges[i].productId === productIdNum) {
      availableProducts.push(this.edges[i]);
    }
  }

  return availableProducts;
};

Graph.prototype.findUnavailableProducts = function(productId) {
  let unavailableProducts = [];

  for (var i = 0; i < this.nodes.length; i++) {
    let storesProducts = this.findAvailableProducts(this.nodes[i].id);
      if (storesProducts.length === 0) {
        unavailableProducts.push(this.nodes[i]);
      }
  }

  return unavailableProducts;
};


// knex statement to create stores_products table:
// knex('stores_products')
//  .select('id', 'products.product_id', 'stores.store_id', 'products.name', 'products.product_type', 'stores.store_name', 'stores.store_address', 'availability', 'price')
//  .innerJoin('products', 'stores_products.product_id', 'products.id')
//  .innerJoin('stores', 'stores_products.store_id', 'stores.id')
//  .orderBy('id')

//nodes should look like this:
// {id: 1234, name: 'wonder bread', type: 'product'} this is a product node
// {id: 236, name: 'Safeway011', type: 'store', latitude:'36.7783° N', longitude: '119.4179° W'} this is a store nodes

//edges should look like this:
// {productId: 1234, storeId: 236, weight: 2.99}
//this edge indicates that wonder bread costs 2.99 at a safeway located  at 36.7783° N & 119.4179° W

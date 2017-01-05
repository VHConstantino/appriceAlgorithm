"use strict";

function GraphEdge(config) {
  this.productId = config.productId;
  this.storeId = config.storeId;
  this.price = config.price;
}

module.exports = GraphEdge;

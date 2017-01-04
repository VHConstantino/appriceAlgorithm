"use strict";

function GraphEdge(productId, storeId, price) {
  this.productId = productId;
  this.storeId = storeId;
  this.price = price;
}

module.exports = GraphEdge;

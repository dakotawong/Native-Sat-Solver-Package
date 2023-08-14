// Entry point for the package

// Import the library (using bindings in case path to sat.node changes)
const addon = require('./build/Release/sat.node');

// Export the methods
exports.solve = addon.solve;

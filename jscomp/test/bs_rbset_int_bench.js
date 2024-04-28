// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Rbset = require("./rbset.js");

function bench(param) {
  var data = "Empty";
  console.time("bs_rbset_int_bench.res 6");
  for(var i = 0; i <= 1000000; ++i){
    data = Rbset.add(i, data);
  }
  console.timeEnd("bs_rbset_int_bench.res 6");
  console.time("bs_rbset_int_bench.res 11");
  for(var i$1 = 0; i$1 <= 1000000; ++i$1){
    if (!Rbset.mem(i$1, data)) {
      throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "bs_rbset_int_bench.res",
          13,
          6
        ],
        Error: new Error()
      };
    }
    
  }
  console.timeEnd("bs_rbset_int_bench.res 11");
  console.time("bs_rbset_int_bench.res 16");
  for(var i$2 = 0; i$2 <= 1000000; ++i$2){
    data = Rbset.remove(i$2, data);
  }
  console.timeEnd("bs_rbset_int_bench.res 16");
  if (Rbset.cardinal(data) === 0) {
    return;
  }
  throw {
    RE_EXN_ID: "Assert_failure",
    _1: [
      "bs_rbset_int_bench.res",
      21,
      2
    ],
    Error: new Error()
  };
}

console.time("bs_rbset_int_bench.res 24");

bench();

console.timeEnd("bs_rbset_int_bench.res 24");

var count = 1000000;

var V;

exports.count = count;
exports.V = V;
exports.bench = bench;
/*  Not a pure module */

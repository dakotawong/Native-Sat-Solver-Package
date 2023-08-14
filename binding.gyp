{
  "targets": [
    {
      "target_name": "sat",
      "cflags!": [ "-fno-exceptions" ],
      "cflags_cc!": [ "-fno-exceptions" ],
      "sources": [
        "./src/parser.cpp",
        "./src/sat.cpp",
        "./src/solver.cpp",
        "./src/tokenizer.cpp",
        "./src/treeNode.cpp",
        "./src/tseitinTransformer.cpp",
        "./src/index.cpp"
      ],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ],
    }
  ]
}
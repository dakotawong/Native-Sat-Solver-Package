#include <napi.h>
#include <string>
#include "sat.h"

// Native C++ function that is assigned to `tripleWord` property on `exports` object
Napi::String solve(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    // Call `triple` function from the `tripple.h` file using the info input
    std::string input = (std::string) info[0].ToString();
    std::string result = sat(input);

    // Return output as a new `Napi::String` value
    return Napi::String::New(env, result);
}

// Initialization method when module is registered with Node.js
Napi::Object Init(Napi::Env env, Napi::Object exports) {

    // Set the functions on the export object
    exports.Set(
        Napi::String::New(env, "solve"), // property name => "tripleWord"
        Napi::Function::New(env, solve) // property value => `tripleWord` function
    );

    // Return `exports` object
    return exports;
}


// register `triple` module which will call the `Init` method
NODE_API_MODULE(solve, Init)
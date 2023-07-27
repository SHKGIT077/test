#include <napi.h>

Napi::String MyFunction(const Napi::CallbackInfo& info) {

Napi::Env env = info.Env();

return Napi::String::New(env, "Hello from C++ addon!");

}


Napi::Object Init(Napi::Env env, Napi::Object exports) {

exports.Set("myFunction", Napi::Function::New(env, MyFunction));

return exports;

}


NODE_API_MODULE(addon, Init)
# LeapMotion Proxy

LeapMotion Proxy is a simple routing web socket server which transfer all message 
receive from local LeapMotion websocket server to a non-localhost locked LeapMotion 
websocket server.

Created by Vincent Saluzzo.

Copyright 2013 ITELIOS SAS. All rights reserved.


# To Do

...

# How to Use

    npm install leapmotion-proxy
    npm start leapmotion-proxy
    
By default, the websocket server port is `8889`. If you need to change this port 
you could do this directly in the leapmotion-proxy.js file inside your node_modules
directory.

# License

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
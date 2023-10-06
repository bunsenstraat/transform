- put models in models in their own dir
- yarn && yarn start
- the code is in renderer.ts
- wait for the app to load, it's not instantr
- to go 14 remove these lines from package and rm the node modules
  "resolutions": {
    "onnxruntime-node": "1.16.0",
    "onnxruntime-web": "1.16.0",
    "onnxruntime-common": "1.16.0"
  }
and run yarn

# gRPC Client Stub

Clone Repo

```
npm i
```

Toggle HOST value in `client_grpc_server_stream.js` to run either locally or on Cloud Run.

Run Link Discoverer crawler locally or Cloud Run, then...

```
npm start
```

The Link Discoverer should respond with a series of progress responses.

```js
{ response: { errors: [], logs: [], progress: 0.2222222238779068 } }
{ response: { errors: [], logs: [], progress: 0.30000001192092896 } }
{ response: { errors: [], logs: [], progress: 0.4000000059604645 } }
{ response: { errors: [], logs: [], progress: 0.4545454680919647 } }
{ response: { errors: [], logs: [], progress: 0.5454545617103577 } }
...
```

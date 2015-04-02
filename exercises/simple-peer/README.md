# Using `simple-peer`

The [`simple-peer`](https://github.com/feross/simple-peer) package is a nice easy way of getting started with WebRTC if you are already familiar with some core node/iojs patterns.  It's also an excellent way to become familiar with the kinds of messages that need to be exchanged by `RTCPeerConnection` objects to establish a connection between themselves.

The example below is an example (taken straight from the `simple-peer` README) of how you can create two local peers and pass messages between them using the `signal` events:

[Simple Peer Example](example.js)
module.exports = function(io) {
  io.on('connection', (socket) => {
    console.log('Client connected to WebSocket');

    socket.on('disconnect', () => {
      console.log('Client disconnected from WebSocket');
    });
  });
};
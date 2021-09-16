# Event Loop

> JavaScript - A Single threaded, Non-Blocking, Concurrent language

> Callbacks -

- In synchronous programming, code is written and executed line by line and this is normal for all the other development environments.
- But if some function call in the code is taking very long time to return the data, then this causes the whole program to ‘block’ - otherwise known as sitting still and waiting -until it loads the data.
- Node.js being an asynchronous platform doesn’t wait around for things like file I/O to finish - Node.js uses callbacks.
- A callback is a function called when the given task is completed; this prevents blocking, and allows other code to run in the meantime.
- Callbacks are the foundation of Node.js. Callbacks give us an interface with which to say -
  “When you are done doing that, do all this”. This allows to have as many I/O operations as the OS can handle happening at the same time.

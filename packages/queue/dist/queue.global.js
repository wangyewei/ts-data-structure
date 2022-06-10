var TdsQueue = (function (exports) {
  'use strict';

  class Queue {
      queue;
      constructor(...args) {
          this.queue = [...args];
      }
      enqueue(...items) {
          this.queue.push(...items);
          return this.queue;
      }
      dequeue() {
          this.queue.shift();
          return this.queue;
      }
      front() {
          return this.isEmpty() ? undefined : this.queue[0];
      }
      back() {
          return this.isEmpty() ? undefined : this.queue[this.size() - 1];
      }
      isEmpty() {
          return this.size() === 0;
      }
      size() {
          return this.queue.length;
      }
  }

  exports.Queue = Queue;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});

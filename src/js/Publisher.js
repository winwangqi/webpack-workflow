export default class Publisher {
  constructor() {
    this.subscribers = new Map();
  }

  addSubscriber(name, subscriber) {
    // name has exist
    if (this.subscribers.has(name)) {
      throw new Error(`The [${name}] subscriber has exist.`);
    }

    // subscriber is not a function
    if (typeof subscriber !== 'function') {
      throw new Error(`The type of [${name}] subscriber is [${typeof subscriber}], it expects function.`);
    }

    this.subscribers.set(name, subscriber);
  }

  removeSubscriber(name) {
    if (!this.subscribers.has(name)) {
      throw new Error(`The [${name}] subscriber not exist.`);
    } else {
      this.subscribers.delete(name);
    }
  }

  publish(data) {
    this.subscribers.forEach(subscriber => subscriber(data));
  }
};
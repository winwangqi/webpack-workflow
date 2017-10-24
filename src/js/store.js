const _store = {
  state: new Map(),
  set(name, val) {
    if (this.state.has(name)) throw new Error(`Store has '${name}'`);
    this.state.set(name, val);
  },
  get() {
    this.state.get(name);
  },
  delete() {
    this.state.delete(name);
  },
  clear() {
    this.state.clear();
  }
};

export default _store;

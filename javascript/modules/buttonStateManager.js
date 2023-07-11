// buttonStateManager.js

class ButtonStateManager {
  constructor() {
    this.states = {};
  }

  toggleState(buttonId) {
    if (!this.states[buttonId]) {
      this.states[buttonId] = false;
    }
    this.states[buttonId] = !this.states[buttonId];
    return this.states[buttonId];
  }

  getState(buttonId) {
    return this.states[buttonId] || false;
  }
}

export default new ButtonStateManager();

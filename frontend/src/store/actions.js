module.exports = {
  toggleType(tipo) {
    return {
      type: 'SET_TYPE',
      tipo,
    }
  },
  toggleStep(step) {
    return {
      type: 'SET_STEP_SUN',
      step,
    };
  }
}
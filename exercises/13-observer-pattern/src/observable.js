/**
 * @example
 * const observer = Observable();
 * observer.subsribe((country, state) => {
 *   console.log(country); // United States
 *   console.log(state); // Alabama
 * });
 * observer.notify("United States", "Alabama");
 */

const Observable = () => {
  /**
   * List of observers
   */
  const listeners = new Set([]); // Set manadates that each listener is unique
  return {
    /**
     * Adds an observer to the list
     * @param function listener
     */
    subscribe: listener => {
      listeners.add(listener);
    },
    /**
     * Removes an observer from the list
     * @param function listener
     */
    unsubscribe: listener => {
      listeners.delete(listener);
    },
    /**
     * Broadcasts the update to each item in the list
     * @param * arguments can be anything
     */
    notify: (...args) => {
      listeners.forEach(listener => listener(...args));
    }
  };
};

export default Observable;

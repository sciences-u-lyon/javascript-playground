export const createStore = reducer => {
  let update;
  let state = reducer(undefined, {});
  return {
    getState: () => state,
    subscribe: fn => update = fn,
    dispatch: action => {
      state = reducer(state, action)
      update();
    }
  };
};

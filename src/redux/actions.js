export const setLeftSidebarOpen = state => ({
  type: 'SET_LEFT_SIDEBAR_OPEN',
  state,
});

export const setRightSidebarOpen = state => ({
  type: 'SET_RIGHT_SIDEBAR_OPEN',
  state,
});

export const setUserPreferencesModalOpen = state => ({
  type: 'SET_USER_PREFERENCES_MODAL_OPEN',
  state,
});

export const toggleLoadingBar = state => ({
  type: 'TOGGLE_LOADING_BAR',
  state,
});

const actions = {
  setLeftSidebarOpen,
  setRightSidebarOpen,
  setUserPreferencesModalOpen,
  toggleLoadingBar,
};

export default actions;

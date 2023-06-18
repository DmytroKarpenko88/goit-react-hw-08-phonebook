// Contacts selectors
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.IsLoading;
// export const getFilter = state => state.contacts.filter;
// export const getFilter = state => state.filter.filter;
export const getFilter = state => state.filter;
export const getActive = state => state.isActive;

// Auth selectors
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;

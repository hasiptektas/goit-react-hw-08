import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload; // API'den gelen verileri state'e kaydediyoruz
        })
        .addCase(fetchContacts.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
        .addCase(addContact.fulfilled, (state, action) => {
          state.items.push(action.payload); // Yeni kişiyi state'e ekliyoruz
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.items = state.items.filter((item) => item.id !== action.payload); // Kişiyi state'den kaldırıyoruz
        })
        .addCase(logOut.fulfilled, (state) => {
          state.items = [];
          state.error = null;
          state.isLoading = false;
        });
    },
  });

export const contactsReducer = contactsSlice.reducer;
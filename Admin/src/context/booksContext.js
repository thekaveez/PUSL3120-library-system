// import React, { createContext, useReducer, useContext } from "react";

// export const BooksContext = createContext();

// export const bookReducer = (state, action) => {
//   switch (action.type) {
//     case "DELETE_BOOK":
//       return {
//         books: state.books.filter((book) => book._id !== action.payload._id),
//       };
//     default:
//       return state;
//   }
// };

// export const useBooksContext = () => {
//   const context = useContext(BooksContext);

//   if (!context) {
//     throw Error("useBooksContext must be used inside a BooksContextProvider");
//   }

//   return context;
// };

// export const BooksContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(bookReducer, {
//     books: [null],
//   });

//   return (
//     <BooksContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </BooksContext.Provider>
//   );
// };



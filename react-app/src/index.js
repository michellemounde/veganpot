import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ModalProvider, Modal } from "./context/Modal";

import store from "./store";
import * as sessionActions from "./store/session";
import * as bookmarkActions from "./store/bookmarks";
import * as commentActions from "./store/comments";
import * as ratingActions from "./store/ratings";
import * as recipeActions from "./store/recipes";

import "./index.css";

if (process.env.NODE_ENV !== "production") {
	window.store = store;
	window.sessionActions = sessionActions;
	window.bookmarkActions = bookmarkActions;
	window.commentActions = commentActions;
	window.ratingActions = ratingActions;
	window.recipeActions = recipeActions;
}

// Wrap the application with the Modal provider and render the Modal component
// after the App component so that all the Modal content will be layered as
// HTML elements on top of the all the other HTML elements:
function Root() {
	return (
		<ModalProvider>
			<Provider store={store}>
				<BrowserRouter>
					<App />
					<Modal />
				</BrowserRouter>
			</Provider>
		</ModalProvider>
	);
}

const root = createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>
);

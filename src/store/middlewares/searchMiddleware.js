export const searchMiddleware = (store) => (next) => (action) => {
    if (action.type === "search/toggleSearch") {
        action.payload = action.payload.replaceAll(" ", "").toLowerCase();
    }
    next(action);
};
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiidleware) => getDefaultMiidleware(),
    devTools: true,
})

export default store
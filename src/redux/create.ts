import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "./modules/reducer"
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./modules/rootSaga"
import { push, routerMiddleware } from "connected-react-router"
import history from "../history"
import TokenService from "../services/TokenService"
import { buffer } from "stream/consumers"

const create = () => {
    const token = TokenService.get();
    const sagaMiddleWare = createSagaMiddleware()

    const store = createStore(
        reducer(history), 
        {
            auth : {
                token,
                loading: false,
                error: null,
            }
        },
        composeWithDevTools(applyMiddleware(sagaMiddleWare, routerMiddleware(history)))
    );

    store.dispatch(push("/"))
    sagaMiddleWare.run(rootSaga);

    return store;
}

export default create;
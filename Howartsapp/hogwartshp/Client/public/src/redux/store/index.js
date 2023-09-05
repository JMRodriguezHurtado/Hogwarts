import {createStore} from "redux";

import rootReducer from "../reducer";
//import thunk from "redux-thunk";

export default createStore(rootReducer);

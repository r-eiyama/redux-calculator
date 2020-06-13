import React from 'react';
import {render} from 'react-dom';
import './index.css';
import CalculatorContainer from "./containers/CalculatorContainer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducers";

const store = createStore(reducer);

render(
    <Provider store={store}>
        <CalculatorContainer/>
    </Provider>,
    document.getElementById('root')
);

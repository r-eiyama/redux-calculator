import React, { Component } from 'react';
import PlusBtn from "./PlusBtn";
import Result from "./Result";
import NumBtn from "./NumBtn";
import * as actions from '../actions'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * 計算機の外観を作成するコンポーネント
 */
class CalculatorContainer extends Component {
    render() {
        const { calculator, actions } = this.props;
        return (
            <div>
                <div>
                    <NumBtn n={1} onClick={() => actions.onNumClick(1)} />
                    <NumBtn n={2} onClick={() => actions.onNumClick(2)}/>
                    <NumBtn n={3} onClick={() => actions.onNumClick(3)}/>
                </div>
                <div>
                    <NumBtn n={4} onClick={() => actions.onNumClick(4)} />
                    <NumBtn n={5} onClick={() => actions.onNumClick(5)} />
                    <NumBtn n={6} onClick={() => actions.onNumClick(6)} />
                </div>
                <div>
                    <NumBtn n={7} onClick={() => actions.onNumClick(7)} />
                    <NumBtn n={8} onClick={() => actions.onNumClick(8)} />
                    <NumBtn n={9} onClick={() => actions.onNumClick(9)} />
                </div>
                <div>
                    <NumBtn n={0} onClick={() => actions.onNumClick(0)} />
                    <PlusBtn onClick={actions.onPlusClick}/>
                </div>
                <div>
                    <Result result={calculator.showingResult ? calculator.resultValue : calculator.inputValue} />
                </div>
            </div>
        );
    }
}

const mapState = (state) => ({
    calculator: state.calculator,
});

function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapState, mapDispatch)(CalculatorContainer);
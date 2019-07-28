import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import * as headerAction from '../store/modules/header';
let wrong_count = 0;
class HeaderContainer extends Component{
    handleChange = (e)=>{
        const {headerActions} = this.props;
        headerActions.changeInput(e.target.value);
    }
    handleStart = ()=>{
        //let button_class = document.getElementById('sub');
        //button_class.setAttribute('disabled', 'disabled');
        const {headerActions} = this.props;
        headerActions.nextWord();
    };
    handleSubmit = e =>{
        e.preventDefault();
        const {headerActions, input, words, index, list} = this.props;
        headerActions.changeInput('');
        console.log(words[index], input, index);

        if(input === words[index]){
            if(input === words[words.length-1]){
                console.log('correct!');
                let button_class = document.getElementById('sub');
                button_class.disabled = false;
                headerActions.finishGame(wrong_count);
                wrong_count = 0;
                return;
            }
            headerActions.correct();
        }
        else{
            wrong_count++;
        }

    };
    render(){
        const {input, words, isStart} = this.props;
        return (
            <Header
                onClicked = {this.handleStart}
                word_index={this.props.index}
                onChange={this.handleChange}
                onSubmit = {this.handleSubmit}
                input = {input}
                words = {words}
                isStart = {isStart}
            />
        )
    }
}

const mapStateToProps = ({header})=>({
    input:header.input,
    index:header.word_index,
    words:header.words,
    isStart:header.isStart,
    list:header.userList,
})
const mapDispatchToProps = dispatch => ({
    headerActions : bindActionCreators(headerAction, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);

import {createAction, handleActions} from 'redux-actions';


const CHANGE_INPUT = 'header/CHANGE_INPUT';
const NEXT_WORD = 'header/NEXT_WORD';
const CORRECT = 'header/CORRECT';
const FINISH = 'header/FINISH';


let word_index = 1;
let id = 1;

export const changeInput = createAction(CHANGE_INPUT, text => text);
export const nextWord = createAction(NEXT_WORD, ()=>({
    word_index :word_index++,
    isStart:'disable',
}));
export const correct = createAction(CORRECT, ()=>({word_index:word_index++}));
export const finishGame = createAction(FINISH, (wrong_count)=>{
    word_index = 1;
    return (
        {id:id++, wrong_count: wrong_count, word_index:0}
    )
});
//()


const initialState = {
    words:['', 'apple','banana','pine','umaya'],
    input :'',
    word_index:0,
    isStart:false,
    userList:[
        {
            id:0,
            wrong_count:3,
        }
    ]
};

export default handleActions(
    {
        [CHANGE_INPUT]: (state, action) => ({
            ...state,
            input: action.payload,
        }),
        [NEXT_WORD]: (state, action) => ({
            ...state,
            word_index:action.payload.word_index,
            isStart:action.payload.isStart,
        }),
        [CORRECT]: (state, action)=>({
            ...state,
            word_index:action.payload.word_index,
        }),
        [FINISH]: (state, action) => ({
            ...state,
            word_index:action.payload.word_index,
            userList: state.userList.concat({
                id:action.payload.id,
                wrong_count:action.payload.wrong_count,
            }),
        })
    },
    initialState
)
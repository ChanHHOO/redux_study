import React from 'react';


const Header = ({onClicked, word_index, onChange, input, words, onSubmit, isStart})=>{

    return (
        <div className="Header">
            <button id="sub" onClick={onClicked} disabled={isStart}>start</button>
            {words[word_index]}
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button>correct</button>
            </form>
        </div>

    )
};
export default Header;
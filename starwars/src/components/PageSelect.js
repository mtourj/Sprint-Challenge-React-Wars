import React from 'react';

const PageSelect = props => {
  return (<div className='page-select'>
    { 
    <button onClick={() => props.advancePage(-1)}className='back'>Previous Page</button>
    }
    { (props.resPerPage * props.curPage) + props.resPerPage >= props.length ? null :
    <button onClick={() => props.advancePage(+1)} className='next'>Next Page</button>
    }
  </div>);
}

export default PageSelect;
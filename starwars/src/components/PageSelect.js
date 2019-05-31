import React from "react";

const PageSelect = props => {
  // console.log(props.resPerPage);

  return (
    <div className="page-select">
      <section>
      <p>Results per page: </p><input type="number" onChange={props.setResPerPage} value={props.resPerPage} />
      </section>
      <section>
        {props.curPage > 0 ? (
          <button onClick={() => props.advancePage(-1)} className="back">
            Previous Page
          </button>
        ) : null}
        {props.resPerPage * props.curPage + props.resPerPage >=
        props.length ? null : (
          <button onClick={() => props.advancePage(+1)} className="next">
            Next Page
          </button>
        )}
      </section>
    </div>
  );
};

export default PageSelect;

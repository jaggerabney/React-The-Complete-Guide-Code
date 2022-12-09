import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

function sortQuotes(quotes, inAscendingOrder) {
  return quotes.sort((quote1, quote2) => {
    if (inAscendingOrder) {
      return quote1.id > quote2.id ? 1 : -1;
    } else {
      return quote1.id < quote2.id ? 1 : -1;
    }
  });
}

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortAscending = queryParams.get("sort") === "ascending";

  const sortedQuotes = sortQuotes(props.quotes, sortAscending);

  function changeSortingHandler() {
    history.push({
      pathname: location.pathname,
      search: `?sort=${sortAscending ? "descending" : "ascending"}`,
    });
  }

  return (
    <>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {sortAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;

import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

function NewQuote(props) {
  const history = useHistory();

  function addQuoteHandler(quoteData) {
    history.push("/quotes");
  }

  return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default NewQuote;

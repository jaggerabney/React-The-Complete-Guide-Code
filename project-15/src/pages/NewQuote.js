import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { addQuote } from "../lib/api";
import useHttp from "../hooks/use-http";

import QuoteForm from "../components/quotes/QuoteForm";

function NewQuote(props) {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  function addQuoteHandler(quoteData) {
    sendRequest(quoteData);
  }

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
}

export default NewQuote;

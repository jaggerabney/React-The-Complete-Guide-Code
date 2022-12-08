import QuoteForm from "../components/quotes/QuoteForm";

function NewQuote(props) {
  function addQuoteHandler(quoteData) {
    console.log(quoteData);
  }

  return <QuoteForm onAdd={addQuoteHandler} />;
}

export default NewQuote;

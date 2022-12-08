import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Jagger", text: "Learning React is great!" },
  { id: "q3", author: "Kira", text: 'What the hell is a "React"?' },
];

function AllQuotes(props) {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;

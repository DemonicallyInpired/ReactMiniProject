import "./Pagination.css";
export default function Pagination({ nPage, maxLen, currIndex, setterIndex }) {
  //   @params nPage : int -> No of pages.
  //   @params maxLen : int -> Maximum length for the pagination.
  //  @params currIndex : int -> current index of the page.
  // @params setterIndex : React<Dispatch<int>> a setter function to update the state of the parent.
  const handleNext = () => {
    if (nPage * currIndex < nPage * maxLen) {
      setterIndex((prevIndex) => prevIndex + 1);
    } else {
      setterIndex(() => maxLen);
    }
  };
  const handlePrev = () => {
    if ((nPage - 1) * currIndex > 0) {
      setterIndex((prevIndex) => prevIndex - 1);
    } else {
      setterIndex(() => 0);
    }
  };
  return (
    <div className="pagination-controls">
      <button onClick={handlePrev} disabled={currIndex === 0} id="prev">
        Previous
      </button>
      <button>{currIndex + 1}</button>
      <button disabled={currIndex === maxLen} id="next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

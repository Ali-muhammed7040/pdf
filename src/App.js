import React, { useState } from "react";
import { Document, Page } from "react-pdf";

import samplePDF from "./dum.pdf";

// const styles = StyleSheet.create({
//   page: { backgroundColor: "tomato" },
//   section: { color: "white", textAlign: "center", margin: 30 },
// });

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <div>
        <Document
          size='A4'
          file={samplePDF}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            width={"500"}
            // height={"500"}
            style={{ backgroundColor: "orange" }}
            pageNumber={pageNumber}
          ></Page>
        </Document>
      </div>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type='button' disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type='button'
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}
export default App;

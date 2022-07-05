import ReactPaginate from "react-paginate";

export type paginationProps = {
    pageCount:number;
    handlePageChange:(event:{selected:number})=>void;
    pageOffset:number;
};

export const Pagination=(data:paginationProps) =>{
    return <ReactPaginate
    previousLabel="Previous"
    nextLabel="Next"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    previousClassName="page-item"
    previousLinkClassName="page-link"
    nextClassName="page-item"
    nextLinkClassName="page-link"
    breakLabel="..."
    breakClassName="page-item"
    breakLinkClassName="page-link"
    pageCount={data.pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={data.handlePageChange}
    containerClassName="pagination"
    activeClassName="active"
    forcePage={data.pageOffset}
  />
}
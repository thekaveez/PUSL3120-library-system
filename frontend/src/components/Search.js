import Form from "react-bootstrap/Form";

const SearchBar = ({ handleFilter }) => {
  return (
    <div className="search">
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleFilter}
        />
      </Form>
    </div>
  );
};

export default SearchBar;

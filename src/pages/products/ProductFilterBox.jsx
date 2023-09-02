import React from "react";

const ProductFilterBox = ({ filterItem, setFilterItem, setCurrentPage }) => {
  const onChangeHandler = (e) => {
    setCurrentPage(1);
    setFilterItem(e.target.id);
  };

  return (
    <div className="product-filter">
      <div className="form-group">
        <input
          value={filterItem}
          onChange={onChangeHandler}
          type="radio"
          name="filter"
          id="all"
        />
        <label htmlFor="all">بدون فلتر</label>
      </div>
      <div className="form-group">
        <input
          value={filterItem}
          onChange={onChangeHandler}
          type="radio"
          name="filter"
          id="laptop"
        />
        <label htmlFor="laptop">لابتوب</label>
      </div>
      <div className="form-group">
        <input
          value={filterItem}
          onChange={onChangeHandler}
          type="radio"
          name="filter"
          id="mobile"
        />
        <label htmlFor="mobile">جوال</label>
      </div>
    </div>
  );
};

export default ProductFilterBox;

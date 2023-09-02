import React from "react";

const ProductSortBox = ({ setItem, setSortItem, setCurrentPage }) => {
  const onChangeHandler = (e) => {
    setSortItem(e.target.id);
    setCurrentPage(1);
  };
  return (
    <div className="product-sort-box">
      <div className="form-group">
        <input
          value={setItem}
          onChange={onChangeHandler}
          type="radio"
          name="sort"
          id="noSort"
        />
        <label htmlFor="noSort">بدون ترتيب</label>
      </div>
      <div className="form-group">
        <input
          value={setItem}
          onChange={onChangeHandler}
          type="radio"
          name="sort"
          id="low"
        />
        <label htmlFor="low">من الاقل الى الاعلى</label>
      </div>
      <div className="form-group">
        <input
          value={setItem}
          onChange={onChangeHandler}
          type="radio"
          name="sort"
          id="high"
        />
        <label htmlFor="high">من الاعلى الى الاقل</label>
      </div>
    </div>
  );
};

export default ProductSortBox;

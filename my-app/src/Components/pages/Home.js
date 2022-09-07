import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { getAllCategories, getFilterCategory } from "../../api";
import { Loader } from "../Loader";
import { CategoryList } from "../CategoryList";
import { Search } from "../Search";

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const { pathname, search } = useLocation();
  const { push } = useHistory();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    push({ pathname, search: `?s=${str}` });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);
  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Loader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}

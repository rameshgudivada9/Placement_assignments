import "./filtersort.css"
import React,{ useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  getProductDataFilterSort,
} from "../redux/JobReducer/JobAction";
export const FilterSort = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState();

  useEffect(() => {
    searchParams.set("page", 1);
    searchParams.set("perPage", 6);
    setSearchParams(searchParams);
  }, []);
  useEffect(() => {
    if (query) {
      dispatch(getProductDataFilterSort(query));
    }
  }, [query]);
  return (
    <div className="filter-sort">
 
      <select
        onChange={(e) => {
          searchParams.set("jobTitle", e.target.value);
          setSearchParams(searchParams);
          setQuery({ ...query, jobTitle: searchParams.get("jobTitle") });
        }}
      >
        <option value="">Filter By JobRole</option>
        <option value="frontend">Frotend</option>
        <option value="backend">Backend</option>
        <option value="fullstack">Full Stack </option>
      </select>
      <select
        onChange={(e) => {
          searchParams.set("Location", e.target.value);
          setSearchParams(searchParams);
          setQuery({ ...query, Location: searchParams.get("Location") });
        }}
      ><option value="">Filter by Place</option>
        <option value="banglore">Banglore</option>
        <option value="delhi">Delhi</option>
        <option value="noida">Noida</option>
      </select>
      <select
        onChange={(e) => {
          searchParams.set("sort", e.target.value);
          setSearchParams(searchParams);
          setQuery({ ...query, sort: searchParams.get("sort") });
        }}
      >
        <option value="">Sorting by Price</option>
        <option value="asc">Low - High</option>
        <option value="des">High- Low</option>
      </select>
      <button
        onClick={() => {
            searchParams.set(
                "page",
                `${ +searchParams.get("page")-1}`
              );
          setSearchParams(searchParams);
          setQuery({ ...query, page: searchParams.get("page") });
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
            searchParams.set(
                "page",
                `${1+ +searchParams.get("page")}`
              );
          setSearchParams(searchParams);
          setQuery({ ...query, page: searchParams.get("page") });
        }}
      >
        Next
      </button>
    </div>
  );
};
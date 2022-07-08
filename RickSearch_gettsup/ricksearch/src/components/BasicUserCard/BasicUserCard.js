import axios from "axios";
import Box from "@mui/material/Box";

import { Fragment, useEffect, useState } from "react";
import "./BasicUserCard.css";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Input } from "@mui/material";

export const BasicUserCard = () => {
  const totalCount = 107;
  const PAGE_LIMIT = 20;

  const [contact, setContacts] = useState([]);

  const getUserCardlist = () => {
    let pageNo = Math.ceil(contact.length / PAGE_LIMIT) + 1;
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?name=rick&page=${pageNo}&limit=${PAGE_LIMIT}`
      )
      .then((res) => {
        var apidata = res.data.results;
        const mergeData = [...contact, ...apidata];
        console.log(apidata);
        setContacts(mergeData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserCardlist();
  }, []);

  const fetchMoreData = () => {
    if (contact.length < totalCount) {
      getUserCardlist();
    }
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Fragment>
      <div className="container">
        <div className="Searchdiv-main">
          <div className="searchIcon">
            <SearchRoundedIcon />
          </div>
          <div className="searchinputdiv">
            <Input
              className="searchInput"
              placeholder="Search for a contact"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row" onClick={toggleModal}>
          <InfiniteScroll
            dataLength={contact.length}
            next={fetchMoreData}
            hasMore={contact.length < totalCount}
            loader={<h4>Loading...</h4>}
          >
            {contact &&
              contact.length > 0 &&
              contact
                .filter((ele) => {
                  if (searchTerm === "") {
                    return ele;
                  } else if (
                    ele.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return ele;
                  }
                })
                .map((ele) => {
                  return (
                    <Fragment>
                      <div className="sub" key={ele.id}>
                        <div className="usercard">
                          <div className="usercard-sub-1">
                            <img
                              src={ele.image}
                              alt="imagess"
                              className="imagesize"
                            />
                          </div>
                          <div className="usercard-sub-2">
                            <h5>{ele.name}</h5>
                          </div>
                        </div>
                        <div className="content">
                          <Box
                            sx={{
                              width: 5,
                              height: 5,
                              backgroundColor: "#00dd74",
                              marginLeft: 5,
                              marginRight: 0.7,
                              marginTop: 3.7,
                              borderRadius: 5,
                            }}
                          />
                          <h6>
                            {ele.status}-{ele.species}
                          </h6>
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
          </InfiniteScroll>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="first-row">
              <div className="image-div">
                <img
                  src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                  alt="profile"
                  className="imagecheck"
                />
              </div>
              <div className="names-div">
                <h5>Rick Sanchez</h5>
                <div className="con">
                  {" "}
                  <div className="marker"></div>
                  <h6>Alive-Human</h6>
                </div>
              </div>
            </div>
            <hr />
            <div className="second-row">
              <div className="second-row-first">
                <div className="detail-1">
                  <p>Gender</p>
                  <h6>Male</h6>
                </div>
                <div className="detail-2">
                  <p>Location</p>
                  <h6>Earth (C-137)</h6>
                </div>
              </div>
              <div className="second-row-second">
                <div className="detail-3">
                  <p>spicies</p>
                  <h6>Human</h6>
                </div>
                <div className="detail-4">
                  <p>origin</p>
                  <h6>Earth (C-137)</h6>
                </div>
              </div>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

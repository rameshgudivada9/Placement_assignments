import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import "./BasicUserCard.css";
import InfiniteScroll from 'react-infinite-scroll-component';
import Modal from "./Modal"
export const BasicUserCard = () => {

    const totalCount=107;
  const PAGE_LIMIT = 20;

  const [contact, setContacts] = useState([]);

  const getUserCardlist = () => {
    let pageNo = Math.ceil(contact.length/PAGE_LIMIT)+1;
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?name=rick&page=${pageNo}&limit=${PAGE_LIMIT}`
      )
      .then((res) => {
          var apidata=res.data.results;
          const mergeData=[...contact,...apidata]
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

  const fetchMoreData=()=>{
      if(contact.length< totalCount){

          getUserCardlist();
      }

  }

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }




  return (
    <Fragment>
      <div className="container">
        <div className="row" >
          <InfiniteScroll
            dataLength={contact.length}
            next={fetchMoreData}
            hasMore={contact.length< totalCount}
            loader={<h4>Loading...</h4>}
          >
            {contact &&
              contact.length > 0 &&
              contact.map((ele) => {
                return (
                  <Fragment>
                    <div className="sub" key={ele.id}>
                      <div className="usercard">
                        <div className="usercard-sub-1">
                          <img
                            src={ele.image}
                            alt="imagess"
                            className="imagesize"
                            onClick={toggleModal}
                          />
                        </div>
                        <div className="usercard-sub-2">
                          <h5 className="head5">{ele.name}</h5>
                        </div>
                      </div>
                      <div className="content">
                        <h5>
                          <input type="radio" className="radio" />
                          {ele.status}-{ele.species}
                        </h5>
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
            <h2>Hello Modal</h2>
            <p>
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}

    </Fragment>
  );
};

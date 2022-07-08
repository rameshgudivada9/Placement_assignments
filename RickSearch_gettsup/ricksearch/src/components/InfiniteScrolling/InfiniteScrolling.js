import InfiniteScroll from "react-infinite-scroll-component";






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


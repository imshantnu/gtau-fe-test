const STATE = Object.freeze({
  IDLE: "idle",
  FETCHING: "fetching",
  ERROR: "error",
});

const ACTIONS = Object.freeze({
  FETCH_LISTINGS: "FETCH_LISTINGS",
  FETCH_LISTINGS_SUCCESS: "FETCH_LISTINGS_SUCCESS",
  FETCH_LISTINGS_ERROR: "FETCH_LISTINGS_ERROR",
  VIEW_LISTING: "VIEW_LISTING",
  REPLY: "REPLY",
});

// Initial State and Actions
const initialState = {
  listings: [], // array of listing object,
  state: STATE.IDLE, // enum state of page/slice "idle" | "fetching" | "error",
  error: undefined, // error message
};

// reducer that updates our state
const listingsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_LISTINGS:
      return {
        ...state,
        state: STATE.FETCHING,
        listings: [],
      };
    case ACTIONS.FETCH_LISTINGS_SUCCESS:
      return {
        ...state,
        state: STATE.IDLE,
        listings: [...action.listings],
      };
    case ACTIONS.FETCH_LISTINGS_ERROR:
      return {
        ...state,
        state: STATE.ERROR,
        listings: [],
        error: action.error,
      };

    case ACTIONS.VIEW_LISTING:
    case ACTIONS.REPLY:
    default:
      return state;
  }
};

const ListingsContext = React.createContext();

const ListingsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(listingsReducer, initialState);

  const value = {
    listings: state.listings,
    state: state.state,
    error: state.error,
    fetch: (endpoint) => {
      dispatch({ type: ACTIONS.FETCH_LISTINGS });
      fetch(endpoint)
        .then((response) => response.json())
        .then((response) => {
          dispatch({
            type: ACTIONS.FETCH_LISTINGS_SUCCESS,
            listings: response,
          });
        })
        .catch((error) => {
          dispatch({
            type: ACTIONS.FETCH_LISTINGS_ERROR,
            error: error.message,
          });
        });
    },
    view: (title) => {
      console.info(`View: ${title}`);
      dispatch({ type: ACTIONS.VIEW_LISTING });
    },
    reply: (title) => {
      console.info(`Reply: ${title}`);
      dispatch({ type: ACTIONS.REPLY });
    },
  };

  return (
    <ListingsContext.Provider value={value}>
      {children}
    </ListingsContext.Provider>
  );
};

const formatAsCurrency = (int) => {
  if (!int) {
    return;
  }

  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(int);
};

const Spinner = () => (
  <div className="spinner__container">
    <div className="spinner" />
  </div>
);

const Error = ({ error }) => (
  <div className="listings__error" role="alert">
    <div className="listings__errorMessage">
      <h3>An error occured, Server responded with {error}!</h3>
      <p>Reload to try again!</p>
    </div>
    <button className="listings__button" onClick={() => location.reload()}>
      Reload
    </button>
  </div>
);

const ListingsHeader = ({ count, keyword, location }) => (
  <div className="listings__header">
    <h1>Search results</h1>
    <h2>
      <span className="listings__text--higlighted">{count} results</span> for{" "}
      <span className="listings__text--higlighted">{keyword}</span> in{" "}
      <span className="listings__text--higlighted">{location}</span>
    </h2>
  </div>
);

const Listing = ({ listing, view, reply }) => {
  const formattedPrice = React.useMemo(() => {
    if (isNaN(listing.price)) {
      return listing.price;
    }
    return formatAsCurrency(listing.price);
  }, [listing]);

  return (
    <li className="listing">
      <h3 className="listing__title">{listing.title}</h3>
      <div className="listing__metadata">
        <span className="listing__price">{formattedPrice}</span>
        <span>{listing.location}</span>
      </div>
      {listing.imgUrl && (
        <img
          className="listing__img"
          title={listing.title}
          src={listing.imgUrl}
        />
      )}
      <p className="listing__desc">{listing.description}</p>
      <div className="listing__actions">
        <button
          className="listings__button"
          onClick={() => view(listing.title)}
        >
          View
        </button>
        <button
          className="listings__button"
          onClick={() => reply(listing.title)}
        >
          Reply
        </button>
      </div>
    </li>
  );
};

const ListingsContainer = ({ dataEndpoint, keyword = "", location }) => {
  const { state, fetch, error, listings, view, reply } =
    React.useContext(ListingsContext);

  React.useEffect(() => {
    fetch(dataEndpoint);
  }, [dataEndpoint]);

  if (state === STATE.FETCHING) {
    return <Spinner />;
  }

  if (state === STATE.ERROR && error) {
    return <Error error={error} />;
  }

  return (
    <>
      <ListingsHeader
        count={listings.length}
        keyword={keyword}
        location={location}
      />

      {listings.length === 0 && (
        <span className="listings__noResults">No results found!</span>
      )}

      {listings.length > 0 && (
        <ol className="listings__grid">
          {listings.map((listing, index) => (
            <Listing listing={listing} key={index} view={view} reply={reply} />
          ))}
        </ol>
      )}
    </>
  );
};

const Listings = (props) => (
  <ListingsProvider>
    <ListingsContainer {...props} />
  </ListingsProvider>
);

export default Listings;

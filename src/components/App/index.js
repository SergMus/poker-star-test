import React from "react";
import { connect } from "react-redux";

import { getDeck } from "../../redux/action";
import Tasks from "../Tasks";
import Cards from "../Cards";

const App = ({ deck, getDeck }) => (
  <div className="tc flex flex-column items-center justify-center">
    {deck ? (
      <>
        <Tasks />
        <Cards cards={deck.cards} />
      </>
    ) : (
      <>
        <div className="lightest-blue tl">
          <p>
            Currently, clicking "Fetch Cards" multiple times sends multiple
            requests to API.
          </p>
          <p className="b">
            Task: Add loading component, so we can only make one request at a
            time.
          </p>
        </div>
        <button
          onClick={() => getDeck()}
          className="bg-animate bg-blue hover-bg-light-blue inline-flex items-center bw0 ma1 tc navy pv2 ph6 br4 f3"
        >
          Fetch Cards
        </button>
        <p className="i f6 light-blue">
          Note: extra credit will be given for refactoring/suggestions done
          throughout.
        </p>
      </>
    )}
  </div>
);

const mapStateToProps = ({ deck }) => ({
  deck
});

export default connect(
  mapStateToProps,
  { getDeck }
)(App);

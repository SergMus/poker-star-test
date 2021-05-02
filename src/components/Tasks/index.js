import React from "react";
import { connect } from "react-redux";
import { sortDeck, sumDeck } from "../../redux/action";

class Tasks extends React.Component {
  sortDeck() {
    this.props.sortDeck();
  }

  async sumDeck() {
    const sum = await this.props.sumDeck();
    alert(sum);
  }

  render() {
    return (
      <div className="flex justify-center items-start mw8">
        <div className="fl w-50 tl pa1">
          <div className="ba b--near-white pv1 ph2">
            <h1>Task 1 - Add up black cards</h1>
            <p>
              Clicking the "Sum Black Cards" button should trigger an alert,
              which shows the sum of the value of all of the cards:
              <ol>
                <li>A = 1, J,Q,K = 10</li>
              </ol>
            </p>
            <button
              onClick={() => this.sumDeck()}
              className="bg-animate bg-dark-blue inline-flex items-center ma2 tc bw0 white b pa2 dim"
            >
              Sum Black Cards
            </button>
          </div>
        </div>
        <div className="fl w-50 tl pa1">
          <div className="ba b--near-white pv1 ph2">
            <h1>Task 2 - Sort Cards</h1>
            <p>
              Clicking the "Sort Cards" button should sort the deck into order,
              so they appear:
              <ol>
                <li>Grouped into Suite (Clubs, Diamonds, Hearts, Spades)</li>
                <li>
                  In ascending order (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A).
                </li>
              </ol>
            </p>
            <button
              onClick={() => this.sortDeck()}
              className="bg-animate bg-dark-blue inline-flex items-center ma2 tc bw0 white b pa2 dim"
            >
              Sort Cards
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { sortDeck, sumDeck }
)(Tasks);

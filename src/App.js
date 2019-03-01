import React, { Component } from 'react';
export default class Numbers extends Component {

  state = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  }

  chickenMonkey(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      return <span>ChickenMonkey</span>
    } else if (number % 3 === 0) {
      return <span>Chicken</span>
    } else if (number % 5 === 0) {
      return <span>Monkey</span>
    }
  }

  render() {
    return (
      <article>
        {this.state.numbers.map(number => {
          return <div key={number}>
            {`${number}: `}
            <span>
              {this.chickenMonkey(number)}
            </span>
          </div>
        })
        }
      </article >
    )
  }
}

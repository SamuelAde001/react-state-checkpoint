import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    // Declaring the initial state of the object of person
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate individual",
        imgSrc:
          "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profession: "Software Engineer",
      },
      show: false,
      count: 0,
    };
  }

  componentDidMount() {
    // Start the timer when the component mounts
    this.startTimer();
  }

  startTimer() {
    // Using setInterval to update the count in the state every second
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000); // Update count every second
  }

  // Toggle the 'show' state to display or hide the profile
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show } = this.state;

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
            Person Profile
          </h1>

          {/* Conditionally render the profile based on the 'show' state */}
          {show && (
            <div className="rounded-md overflow-hidden shadow-md mb-6">
              <img
                src={person.imgSrc}
                alt="Person Avatar"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-800">
                  {person.fullName}
                </h2>
                <p className="text-gray-600">{person.bio}</p>
                <p className="text-gray-700 mt-2">
                  Profession: {person.profession}
                </p>
              </div>
            </div>
          )}

          {/* Display the time since mount */}
          <p className="text-center text-gray-700">
            Time since mount: {this.state.count} seconds
          </p>

          {/* Button to toggle the profile visibility */}
          <button
            onClick={this.toggleShow}
            className="w-full mt-4 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
          >
            Toggle Profile
          </button>
        </div>
      </div>
    );
  }
}

export default App;

# Galactic Bug Battle

Galactic Bug Battle is a simple 2D grid-based game built using React. Players are presented with a hidden bug on a grid and must click on the cells to find and "hit" the bug. The game ends when the entire bug is found. A confetti effect is displayed when the player successfully finds the bug.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Game Components](#game-components)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Grid-based gameplay
- Simple and intuitive design
- Interactive game board
- Customizable bug length and orientation
- Confetti effect upon successfully finding the bug

## Getting Started

To set up the project on your local machine, follow these instructions.

### Prerequisites

- Make sure you have Node.js installed on your system. If not, download and install the latest LTS version from the [official website](https://nodejs.org/en/download/).

### Installation

1. Clone the repo
```sh
git clone https://github.com/sumitramanga/galactic-bug-battle.git
```

2. Change the directory to the project folder
```sh
cd battle-bugs
```

3. Install the dependencies
```sh
npm install
```

4. Start the development server
```sh
npm start
```

The application will now be running at `http://localhost:3000/`.

## Game Components

- **App.js**: The main application component that renders the `Game` component.
- **Game.js**: The primary game component that handles game logic, state, and renders the `Board`, `Ship`, and `ConfettiWrapper` components.
- **Board.js**: Displays the game board grid and manages the `Cell` components.
- **Cell.js**: Represents individual cells on the game board.
- **Confetti.js**: A wrapper component for the `react-confetti` library that displays a confetti effect when the bug is found.
- **Ship.js**: Represents the hidden bug in the game.
- **Cell.css**: Contains the styling for the `Cell` component.
- **index.css**: Contains the styling for the game outside of the `Cell` component.

## Future Improvements
- Add multiple levels with increasing difficulty
- Implement a timer and scoring system
- Offer customization options for board size and bug appearance
- Incorporate animations and sound effects
- Create a multiplayer mode


## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - sumitramanga@gmail.com

Project Link: https://github.com/sumitramanga/galactic-bug-battle
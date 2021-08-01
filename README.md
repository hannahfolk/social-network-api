# Social Network API

<!--- These are examples. See https://shields.io for others or to customize this set of shields. You might want to include dependencies, project status and licence info here --->

![GitHub repo size](https://img.shields.io/github/repo-size/hannahfolk/social-network-api)
![GitHub contributors](https://img.shields.io/github/contributors/hannahfolk/social-network-api)
![GitHub stars](https://img.shields.io/github/stars/hannahfolk/social-network-api?style=social)
![GitHub forks](https://img.shields.io/github/forks/hannahfolk/social-network-api?style=social)
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

Setting up a backend for a social networking app. Users can create users and add other users to user's friend list. Users can also create thoughts and add reactions from other users to thoughts. Users can also update and delete users, thoughts, and reactions.

<a href="https://github.com/hannahfolk/social-network-api"><strong>Explore the docs »</strong></a>

<a href="https://hannahfolk/github.io/social-network-api">View Demo</a>
·
<a href="https://github.com/hannahfolk/social-network-api/issues">Report Bug</a>
·
<a href="https://github.com/hannahfolk/social-network-api/issues">Request Feature</a>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Contact](#contact)
- [License](#license)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://hannahfolk.github.io/social-network-api/)

### Built With

- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Express](https://expressjs.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

```sh
npm install npm@latest -g
```

- [Insomnia](https://insomnia.rest/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/hannahfolk/social-network-api.git
```

2. Install NPM packages

```sh
npm install
```

## Using Social Network API

1. In a terminal run `npm start`.
2. Open Insomnia and begin testing routes.
3. Feel free to copy and paste the urls and JSON (if necessary) provided below.
4. Replace anywhere you see `{someId}` with the proper id from the database

### API Routes

### Users and Friends

- `GET` all users (`http://localhost:3001/api/users`)
- `GET` user by id (`http://localhost:3001/api/users/{userId}`)
- `POST` a user (`http://localhost:3001/api/users`)

```json
// example data
{
  "username": "troybarnes",
  "email": "troybarnes@greendale.edu"
}
```

- `PUT` a user (`http://localhost:3001/api/users/{userId}`)
- `DELETE` a user (`http://localhost:3001/api/users/{userId}`)
- `POST` a friend (`http://localhost:3001/api/users/{userId}/friends/{friendId}`)
- `DELETE` a friend (`http://localhost:3001/api/users/{userId}/friends/{friendId}`)

### Thoughts and Reactions

- `GET` all thoughts (`http://localhost:3001/api/thoughts`)
- `GET` thought by id (`http://localhost:3001/api/thoughts/{thoughtId}`)
- `POST` a thought (`http://localhost:3001/api/thoughts`)

```json
// example data
{
  "thoughtText": "I just wanna play football.",
  "username": "troybarnes",
  "userId": "61065860c7fc26a770025d85"
}
```

- `PUT` a thought (`http://localhost:3001/api/thoughts/{thoughtId}`)
- `DELETE` a thought (`http://localhost:3001/api/thoughts/{thoughtId}`)
- `POST` a reaction (`http://localhost:3001/api/thoughts/{thoughtId}/reactions`)
```json
// example data
{
  "reactionBody": "Britta is an idiot.",
  "username": "jeffwingerisawesome",
  "userId": "61065226f73ff79f725a79bd"
}
```
- `DELETE` a reaction (`http://localhost:3001/api/thoughts/{thoughtId}/reactions/{reactionId}`)

## Contact

If you want to contact me you can reach me at [hfolk25@gmail.com](hfolk25@gmail.com).

## License

<!--- If you're not sure which open license to use see https://choosealicense.com/--->

This project uses the [MIT][license-url] license.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[repo-size-shield]: https://img.shields.io/github/repo-size/hannahfolk/social-network-api
[contributors-shield]: https://img.shields.io/github/contributors/hannahfolk/social-network-api
[contributors-url]: https://github.com/hannahfolk/social-network-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/hannahfolk/social-network-api
[forks-url]: https://github.com/hannahfolk/social-network-api/network/members
[stars-shield]: https://img.shields.io/github/stars/hannahfolk/social-network-api?style=social
[stars-url]: https://github.com/hannahfolk/social-network-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/hannahfolk/social-network-api
[issues-url]: https://github.com/hannahfolk/social-network-api/issues
[license-shield]: https://img.shields.io/badge/license-MIT-green
[license-url]: https://github.com/hannahfolk/social-network-api/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/hannahfolk
[product-screenshot]: social-network-api.gif

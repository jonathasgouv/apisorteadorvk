# VK User Drawer - API
**Version 1.0.0**

Api that provides the data for the front-end of the [VK User Drawer](https://github.com/jonathasgouv/vkuserdrawer) project.

## Table of Contents
* [Getting Started](#getting-started)
* [Installing](#installing)
* [Built With](#built-with)
* [Author](#author)
* [License](#license)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Note that this is only the back-end of the project, in order to see it working properly you'll need to install the [front-end](https://github.com/jonathasgouv/vkuserdrawer) afterwards, or make your own version of it.

It is also important to note that this back-end only provides the list of users of a given topic (and also their informations) to the front-end, all of the drawing algorithm is contained in the front-end.

## Installing
Run the following commands and you will end up with a local running version of the project.

```
$ git clone https://github.com/jonathasgouv/vkuserdrawerAPI.git
$ cd vkuserdrawerAPI/
$ npm install
```

Now your server is ready to run, but first you need to put your group id on the group_id variable on the [index.js](https://github.com/jonathasgouv/vkuserdrawerAPI/blob/main/index.js) file, as below:
```
let group_id = 'GROUP ID HERE';
```
Now you just need to set you VK acess key on the .env file and that's it, you're good to go.
```
$ npm start
```
Your server is now running on [port 3000](http://localhost:3000/).

## Built With
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/pt-br/)

## Author
* [Jônathas Gouveia](https://github.com/jonathasgouv/)

## License
This project is licensed under the  GPL-3.0 License - see the [LICENSE](https://github.com/jonathasgouv/vkuserdrawerAPI/blob/main/LICENSE) file for details

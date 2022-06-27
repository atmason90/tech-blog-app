# Tech Blog App

![License Badge](https://img.shields.io/badge/License-MIT-blue)

Deployed Application: https://the-tech-blog-am.herokuapp.com/

GitHub Repository: https://github.com/atmason90/tech-blog-app

## Usage Instructions
- Navigate to the deployed application: https://the-tech-blog-am.herokuapp.com/  
- Click login to login or signup for an account
- Click on posts to view or leave comments
- Navigate to the dashboard page to view your posts or create new posts

## Table of Contents

- [Description](#description)
- [Screenshot](#screenshot)
- [Code Examples](#code-examples)
- [Technologies Used](#technologies-used)
- [Questions](#questions)
- [License](#license)

## Description

The purpose of this project was to build a full stack application using the Model-View-Controller paradigm. This application uses a number of different technologies, including: Mysql, Express.js, mysql2 npm package, sequelize npm package, express-handlebars npm package, express-session npm package, connect-session-sequelize npm package, dotenv npm package, and bcrypt npm package.

The Tech Blog Application allows for creation of user accounts, login/logout functionality, viewing and commenting on blog posts, and a user dashboard where authored posts can be edited or deleted.

## Screenshot

![Screen Shot 2022-05-09 at 7 01 19 PM](https://user-images.githubusercontent.com/99947655/167529565-0c6a8a18-615a-4f4b-b25c-b8c0aaeb6678.png)

## Code Examples

This example shows how I structured my handlebars file for the homepage of the application.

```hbs
<body class="flex-column min-100-vh">
  <nav class="navbar">
    <ul>
      <li class="li-inline nav-item"><a href="/">Homepage</a></li>
      <li class="li-inline nav-item"><a href="/dashboard">Dashboard</a></li>
      {{#if logged_in}}
        <li class="li-inline nav-item"><a
            id="logout-link"
            href="/"
          >Logout</a></li>
      {{else}}
        <li class="li-inline nav-item"><a href="/login">Login</a></li>
      {{/if}}
    </ul>
  </nav>
  <header class="hero">
    <h1 class="app-title"><a href="/">The Tech Blog</a></h1>
  </header>
  <main class="col-auto">
    {{{body}}}
  </main>
  {{#if logged_in}}
    <script src="/js/logout.js"></script>
  {{/if}}
</body>
```

This is the route I used when a user clicks on a post on the homepage. This route takes the user to a page that displays the post, all comments that have been left on the post, and an input field for the user to leave their own comment.

```js
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: { id: req.params.id },
      include: [
        User,
        {
          model: Comment,
          include: User,
        },
      ],
    });
    if (postData) {
      const post = postData.get({ plain: true });
      console.log(post);
      res.render("single-post", {
        layout: "main",
        post,
        logged_in: req.session.loggedIn,
      });
    } else {
      res.status(400).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
```

## Technologies Used

![JavaScript Badge](https://img.shields.io/badge/Language-JavaScript-yellow)
![CSS Badge](https://img.shields.io/badge/Language-CSS-blue)
![Handlebars Badge](https://img.shields.io/badge/Language-Handlebars-orange)
![Mysql Badge](https://img.shields.io/badge/Database-MySql-informational)
![Sequelize Badge](https://img.shields.io/badge/NPM-Sequelize-important)
![Connect-session-sequelize](https://img.shields.io/badge/NPM-connect--session--sequelize-brightgreen)
![Node.js Badge](https://img.shields.io/badge/Environment-Node.js-red)
![Express Badge](https://img.shields.io/badge/NPM-Express.js-green)
![Express-handlebars](https://img.shields.io/badge/NPM-express--handlebars-yellowgreen)
![Express-session](https://img.shields.io/badge/NPM-express--session-ff69b4)
![Dotenv Badge](https://img.shields.io/badge/NPM-dotenv-blueviolet)
![bcrypt](https://img.shields.io/badge/NPM-bcrypt-9cf)

## Questions

If you have any questions regarding this project, please reach out to me via email at atmason90@gmail.com.

You can view my other projects on GitHub by visiting my profile. [atmason90](https://github.com/atmason90)

## License

MIT License

Copyright (c) 2022 Andrew Mason

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

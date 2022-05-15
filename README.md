# Frontend Mentor - REST Countries API with color theme switcher

![Design preview for the REST Countries API with color theme switcher coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

This challenge will help you improve your coding skills by building realistic projects.

**To do this challenge, you need a good understanding of JavaScript.**

## The challenge

Your challenge is to integrate with the [REST Countries V2 API](https://restcountries.com/#api-endpoints-v2) to pull country data and display it like in the designs.

Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region (Bonus: If you have extra time, work on different filters to practice your JS skills)
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

PS: This is a boilerplate, which means that the backend is already done. Don't worry about it!
PS 2: Also, the connection with the API, is also covered.
PS 3: DON'T TOUCH THESE FILES: `router.js` OR THE `server.js`

## Where to find everything

Check the design folder to understand what it is being asked for.

Homepage - `localhost:3000/` - It should be just a Hero page. Search for it and get some references.
It is not included in the design images but I am sure you can think in something AWESOME!

Countries - `localhost:300/countries` - It shows the whole list of countries, where users can filter by name using the input on the left or by region, using the dropdown on the right. Feel free to add a filter section for an extra challenge.

Country - `localhost:3000/countries/:id` - When one of the countries' card is clicked, it should redirect the user to the country's page, where is possible to see more information. Don't forget to add the border countries as buttons and redirect to their's page if clicked.
Also, it should have a button to go back to countries' page. Use `cca3` as the `id` of the country.

### Where should I add the HTML?

In the `views` folder, `Countries.js`, `Homepage.js` and `CountryView.js` have a `getHTML()` function, where returns the html for each page.

### Where should I add the CSS?

Create new `.scss` files to compile the `.css` file. It is located in the `frontend/static/css` folder.

### Where should I add the JS?

Use only the `index.js` file. DON'T TOUCH THE `router.js` or the `server.js`. If you really think that something in these files need to be changed, please ask for help before any changes.

Your task is to build out the project to the designs inside the `/design` folder.

In this challenge, you will find mobile and desktop designs in light and dark mode color schemes for both pages.

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`.

There are no assets for this challenge, as the country flags will be pulled from the [REST Countries V2 API](https://restcountries.com/#api-endpoints-v2) and you can use an icon font library for the icons.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Building your project

Feel free to use any workflow that you feel comfortable with. But, below there are a few mandatory steps to follow:

1. Fork this project as a public repository on [GitHub](https://github.com/). Only the captain of the team should fork. The other team mates should be contributors, NOT COLLABORATORS! The captain is responsible of checking the pull requests and reject it if necessary.

```
// To run your project, follow the commands below:
npm install
npm run dev

//To access the webpage, go to: localhost:3000/
```

2. Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, and we provide some recommendations below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
4. Create wireframes for future reference. If you decide to change it later, it should affect your wireframe too.
5. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
6. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
7. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Deploying your project

As mentioned above, there are many ways to host your project for free. Our recommend hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Heroku](https://heroku.com/)

## Create a custom `README.md`

We strongly recommend overwriting this `README.md` with a custom one. We've provided a template inside the [`README-template.md`](./README-template.md) file in this starter code.

The template provides a guide for what to add. A custom `README` will help you explain your project and reflect on your learnings. Please feel free to edit our template as much as you like.

Once you've added your information to the template, delete this file and rename the `README-template.md` file to `README.md`. That will make it show up as your repository's README file.

## Submitting your solution

Submit your solution on Google Classroom.

**Have fun building!** 🚀

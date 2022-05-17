[Live preview available here](xdesign-tech-test-spacex.netlify.app)


# SpaceX App

This is a create React application that consumes data from the SpaceX public API. The application retrieves historic and future SpaceX launches and presents them in a list view.

The API documentation is available from:
Postman - [https://docs.spacexdata.com](https://docs.spacexdata.com/)
GitHub - [https://github.com/r-spacex/SpaceX-API](https://github.com/r-spacex/SpaceX-API)

## Notes

- 'Retrieves historic and future SpaceX launches': I have called the /launches endpoint which should return past and future launches but at present there are no future launches planned according to the API data

- 'Implement font face in the global css': Not sure what the requirement is here so I have left the font-face declarations in the 'fonts.scss' file as they seem to be working correctly throughout the app.

- I have also made the LaunchList responsive

## Potential Improvements

- Add React Testing Library tests to components

- Data fetching with React Query

- Fix loading indicator flashing for a second in top left corner

- Image is sticky until the list renders so this would need looking at if I had more time

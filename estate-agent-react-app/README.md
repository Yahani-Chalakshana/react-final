# Estate Agent Property Search Application

- This project is a client-side React single-page application developed as part of the 5COSC026W Web Development coursework.

- The application allows users to browse, search, and filter property listings, view detailed information about individual properties, and manage a list of favourite properties.

- The application is built entirely using modern frontend technologies and runs fully in the browser.

---

## Features

- Display of property listings with images and key details

- Advanced search and filtering functionality:
  - Property type (House / Flat)
  - Number of bedrooms
  - Minimum and maximum price
  - Tenure type (Freehold / Leasehold)
  - Location keyword search
  - Date added filter

- Property details page including:
  - Image gallery
  - Floor plan
  - Embedded Google Map

- Favourites system:
  - Add and remove properties from favourites
  - Persistent storage using the browser’s localStorage
  - Drag-and-drop support for adding favourites

- Responsive user interface suitable for desktop and mobile devices

---

## Technologies Used

- React (with Vite)
- JavaScript (ES6+)
- React Router
- React Widgets
- HTML5
- CSS3
- Browser LocalStorage API

---

## Running the Project Locally

To run the project locally, follow the steps below:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
   
2. Navigate to the project directory:
    ```bash
    cd estate-agent-app
    ```
    
3. Install dependencies:
    ```bash
    npm install
    ```
    
4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open the application in your browser at:
    http://localhost:5173

---

## Testing and Validation

- The application was manually tested to ensure that all required functionality works as expected.

### Search and Filtering

- Selecting a property type (House or Flat) correctly filters the property list

- Bedroom filtering returns properties with matching bedroom counts

- Minimum and maximum price filters work independently and in combination

- Tenure filtering correctly limits results to Freehold or Leasehold properties

- Location keyword search matches property addresses and descriptions

- Date filtering returns only properties added after the selected date

### Combined Filters

- Multiple filters can be applied simultaneously without errors

- Clearing filters restores the full property list

### Favourites

- Properties can be added to and removed from favourites

- Favourite properties persist after page refresh using localStorage

- Drag-and-drop interaction for adding favourites works as expected

- Drag-and-drop support for adding and removing favourites

### Routing

- Navigation between pages works without full page reloads

- Individual property detail pages load correctly using dynamic routes

## Security and CSP Considerations

- The application implements client-side security using React’s JSX encoding.

- All dynamic content is rendered using JSX, which automatically escapes values before rendering them to the DOM, preventing cross-site scripting (XSS) attacks.

- User input is handled using controlled components, and no raw HTML rendering or dangerouslySetInnerHTML is used.

- A Content Security Policy (CSP) is implemented via a meta tag in the index.html file. 

- The CSP restricts scripts, images, and frames to trusted sources only, preventing unauthorised script execution. External content such as the embedded Google Maps iframe is explicitly allowed through the CSP configuration.

- No sensitive user data is collected or stored. Only non-sensitive application state (favourite properties) is persisted using the browser’s localStorage API.

## Deployment

- The application is intended to be deployed using a modern static hosting platform such as Netlify or Vercel. A live deployment URL will be provided upon submission.
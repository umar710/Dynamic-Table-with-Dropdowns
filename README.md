# Dynamic Table with Dropdowns

This React application displays a dynamic table where users can interact with dropdowns for each column, add new rows, and even modify dropdown options.

## Features

1. **Column 1: Single Select Dropdown**
   - Options are pulled from a static list.
   - Once an option is selected in one row, it is removed from the dropdown options for other rows.

2. **Column 2: Multi-Select Dropdown**
   - Allows selection of multiple options from a dropdown.
   - Includes a button within the dropdown to dynamically add new options.

3. **Add New Row Button**
   - Adds a new row to the table with dropdowns for both columns.

4. **Dynamic State Management**
   - State updates ensure consistent behavior across rows and columns.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/dynamic-table-dropdowns.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dynamic-table-dropdowns
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```plaintext
.
├── public/         # Public assets (e.g., index.html)
├── src/            # Source code
│   ├── App.css     # Styles for the application
│   ├── App.js      # Main application logic
│   └── index.js    # Entry point for React
├── package.json    # Project configuration and dependencies
└── README.md       # Project documentation
```

## Usage

1. **Interacting with the Table:**
   - Use the dropdown in Column 1 to select an option. Selected options will not be available for other rows.
   - Use the dropdown in Column 2 to select multiple options. Add new options using the "Add New Item" button.

2. **Adding Rows:**
   - Click the "Add New Row" button to append a new row to the table.

3. **Styling:**
   - Modify `App.css` to customize the table's appearance.

## Dependencies

- `react`
- `react-dom`
- `react-select`

## License

This project is licensed under the [Live](https://dynamic-table-with-dropdowns.netlify.app/).


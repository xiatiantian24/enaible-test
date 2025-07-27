# Cerulean - Shopping Trip Planner

A modern shopping trip planner app with dynamic test scenario selection.

## Features

- **Dynamic Test Scenarios**: Switch between different test configurations without maintaining separate branches
- **Test Selection UI**: Choose from multiple test scenarios via buttons on the search screen
- **Unified Codebase**: All test data is managed in a single configuration object

## Test Scenarios

The app includes three pre-configured test scenarios:

1. **Test 1 - Summer Shirts**: Features summer clothing items with a focus on breathable fabrics
2. **Test 2 - Wedding Attire**: Features formal navy shirts suitable for wedding events
3. **Test 3 - Summer Dresses**: Features formal dresses for summer wedding events

## How to Use Test Selection

1. **Launch the app** and complete the onboarding process
2. **On the search screen**, you'll see three test selection buttons above the search bar
3. **Click any test button** to switch to that scenario:
   - The search input will be populated with the test-specific query
   - Product data will be updated to match the selected scenario
   - Refine images will be updated accordingly
4. **Proceed with the normal flow** - search, refine, and view products

## Adding New Test Scenarios

To add a new test scenario:

1. **Add a new configuration** to the `TEST_CONFIGS` object in `app.js`:
   ```javascript
   test4: {
     name: "Test 4 - Your Test Name",
     searchQuery: "Your search query here",
     products: [
       // Your product data array
     ],
     refineImages: [
       // Your refine images array
     ]
   }
   ```

2. **Add a new button** to the SearchBar component in `components/SearchBar.js`:
   ```html
   <button class="test-btn" data-test="test4">
     <span class="test-btn-number">4</span>
     <span class="test-btn-label">Your Test Name</span>
   </button>
   ```

3. **Update the button labels** to match your test scenario

## File Structure

- `app.js` - Main application logic and test configuration
- `components/SearchBar.js` - Search bar component with test selection UI
- `styles.css` - Styling for test selection buttons
- `assets/images/` - Product and refine images for all test scenarios

## Running the Application

1. Start a local server: `python -m http.server 8000`
2. Open your browser to `http://localhost:8000`
3. Use the test selection buttons to switch between scenarios

## Technical Implementation

- **Test Configuration**: All test data is stored in the `TEST_CONFIGS` object
- **Dynamic Switching**: The `switchTestConfig()` function updates all relevant data
- **Global State Management**: Test data is stored in `window.PRODUCTS` and `window.REFINE_IMAGES`
- **UI Updates**: Test selection automatically updates the search input and example placeholders

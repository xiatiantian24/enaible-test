# Cerulean - Shopping Trip Planner

This is a prototype of a shopping trip planner that helps users discover, refine, and plan their shopping trips with personalized recommendations and interactive maps.

## Getting Started

### **Live Demo**
**View the live site**: [https://xiatiantian24.github.io/enaible-test/](https://xiatiantian24.github.io/enaible-test/)

> **Note**: Phone screen recommended for live site.

### **Local Installation & Running**

**Option 1: Using Python HTTP Server**
1. Clone the repository
2. Navigate to the project directory
3. Start a local server:
   ```bash
   python -m http.server 8000
   ```
4. Open your browser to `http://localhost:8000`
5. Complete the onboarding process to start using the app

**Option 2: Using Live Server Extension (VS Code)**
1. Clone the repository
2. Open the project in VS Code
3. Install the "Live Server" extension
4. Right-click on `index.html` and select "Open with Live Server"
5. Complete the onboarding process to start using the app

## Prototyped Functionality & User Flow

### 1. **Onboarding & Preferences**
- Configure shopping preferences (department, sizes, budget)
- Set location permissions
> **Note**: Preferences are pre-filled for demo purposes

### 2. **Search**
- Select from predefined search scenarios to simulate natural language queries
> **Note**: Search functionality is simulated using pre-configured test scenarios; custom text input is disabled as no backend processing is implemented

### 3. **Style Refinement**
- Select up to 3 reference images to refine product recommendations
> **Note**: Image selection is functional; AI-powered refinement is simulated

### 4. **Product Browsing**
- Browse curated product recommendations in card view/detail view
> **Note**: Live inventory data and store information are simulated

### 5. **Trip Planning & Map**
- Build shopping trips by adding/removing items
- View items on map with trip statistics (estimated time, distance, number of stops)
> **Note**: Interactive map displays mock store locations around Pittsburgh; location data are simulated

## Example searches

The prototype includes four pre-configured search scenarios, available via tapping on the buttons below the search bar:

1. **1 - Running Shoes**: "Running shoes for a 5k on a Pittsburgh summer"
2. **2 - Tennis Shoes**: "Casual tennis shoes that go well with linen pants"
3. **3 - Summer Jorts**: "Denim jorts with pockets"
4. **4 - Jeans**: "Jeans that look good with a white or black t-shirt"

---

Developed with Cursor by Ray Xia from Team ENAiBLE, MHCI '25


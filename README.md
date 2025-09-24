## ✈️ WanderLust
WanderLust is a full-stack web application for browsing and managing vacation properties, including houses, villas, and farmhouses. Users can explore listings, view property details, leave reviews, and, if logged in, add or manage their own properties. Mapbox integration allows real-time location display for each listing.


## 🌐 Live Demo
You can view the live application here: WanderLust on Render

## ✨ Key Features 

  - 🏠 Property Listings: Browse all available vacation homes, villas, and farmhouses on the home page.

  - 🔐 User Authentication: Secure signup and login functionality using Passport.js.

  - ✏️ Property Management: Authenticated users can easily add, update, or delete their own property listings.

  - ⭐ Review System: Logged-in users can add and delete their own reviews on any property.

  - 🗺️ Mapbox Integration: Each property's location is displayed on an interactive map for easy visualization.

  - 🛡️ Access Control: Users are redirected to the login page if they attempt to access restricted actions like adding a listing or review without being logged in.

  - 📱 Responsive Design: A clean and modern UI that works smoothly on both desktop and mobile devices.

## 📸 Screenshots
(This is a great place to add screenshots of your application!)

## How to Use

  - Landing Page: Users can browse all property listings and click on any listing to see details.Map shows the location of the property.

  - Login/Signup: Click Login or Signup from the navigation bar.Users must be logged in to perform actions like adding reviews, editing properties, or listing new properties.

  - Reviews: Logged-in users can add reviews on any property.Users can delete only their own reviews.

  - Listing a Property: Logged-in users can add a new property.

  - Mapbox integration allows selecting the property location.

  - Owners can edit details of their own properties, including price and other information.

  - Access Restrictions: Attempting to edit or list properties while not logged in redirects users to the login page.

## 💻 Tech Stack
  - Frontend: HTML, EJS, CSS, JavaScript

  - Backend: Node.js, Express.js

  - Database: MongoDB

  - Authentication: Passport.js

  - Map Integration: Mapbox API

  - Deployment: Render

## ⚙️ Installation
```bash
# Clone the repository
git clone https://github.com/resmit-dholariya/WanderLust.git

# Navigate into the project directory
cd WanderLust

# Install dependencies
npm install

# Start the application
node app.js
```

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## Fork the Project
```bash
# Create your Feature Branch
(git checkout -b feature/AmazingFeature)

# Commit your Changes
(git commit -m 'Add some AmazingFeature')

# Push to the Branch
(git push origin feature/AmazingFeature)

# Open a Pull Request
```
📄 License
This project is licensed under the MIT License. See the LICENSE file for more information.
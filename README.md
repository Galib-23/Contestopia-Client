# Contest Management Website

Welcome to the Contest Management Website, a platform built using the MERN stack to streamline contest creation, management, and participation.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for building responsive and modern designs.
- **Node.js**: A JavaScript runtime for server-side development.
- **Express.js**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing and retrieving contest data.
- **Cors**: Cross-Origin Resource Sharing middleware to enable secure cross-origin requests.
- **JWT (JSON Web Tokens)**: Used for secure authentication and authorization.
- **Stripe**: Integrated for payment processing and handling transactions.
- **dotenv**: Used for loading environment variables.
- **Firebase**: Utilized for various functionalities such as user authentication and possibly other features.

## Features

### Admin Panel

- **User Management**: Admin can manage users, including deleting users and setting user roles.
- **Contest Management**: Admin has the authority to accept or reject created contests, providing control over the platform's content.

### Creator Dashboard

- **Contest Creation**: Creators can create new contests, defining details such as rules, rewards, and duration.
- **Contest Update/Delete**: Creators can modify or remove contests as needed.
- **Dashboard Overview**: Creators can view past created contests and manage currently running contests.

### User Dashboard

- **Contest Registration**: Users can register for contests after going through payment processing using Stripe.
- **Payment Processing**: Integration with Stripe for secure and seamless payment transactions.
- **Contest History**: Users can view past participated contests and track their performance.
- **Champion Status**: Highlighting contests where the user emerged as a champion.

## Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/your-username/contest-management.git
   cd contest-management
2. Install Dependencies:

   ```bash
   npm install

3. Run Locally:

   ```bash
   npm run dev
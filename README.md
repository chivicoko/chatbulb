# ChatBulb App

**ChatBulb** is a full-stack web application that allows users to toggle a virtual lightbulb via a chat interface. The app uses GPT-4o-mini to process natural language commands and updates the lightbulb state accordingly. Added authentication with Clerk, and e2e test with Cypress.

## Features

- **Lightbulb Control**: A React component visually represents the lightbulb. The bulb can be toggled on and off, and its state is controlled either manually or through AI-driven chat commands.
- **Chat Interface**: A simple chat interface allows users to control the lightbulb by typing commands. The chat uses GPT-4o-mini for understanding user inputs.
- **Function Calling**: The light status is fetched and toggled using function calls, ensuring seamless integration between the front end and back end.
- **Database**: MongoDB is used to persist the lightbulb's state across sessions.
- **Authentication**: Clerk is used to sign in users for access into the page.
- **End-to-End Testing**: Cypress is set up for e2e testing to ensure the app works as expected.

## Tech Stack

- **Frontend**: React, TypeScript, Next.js, Tailwind CSS, Material UI
- **Backend**: Next.js API Routes, Node.js, TypeScript
- **AI Integration**: OpenAI GPT-4o-mini
- **Database**: MongoDB
- **Testing**: Cypress

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/chivicoko/chatbulb.git
   cd chatbulb
   npm install
   npm run dev

    Open http://localhost:3000 in your browser to see the app.


## NB: 
The subscription of my gpt accound was a free one. So I was not able to test some things that I was supposed to test before rounding up the task. But I tried to simulate the result with the subscription I could afford. 
So, some functionalities may not be perfect as expected. With a better subscription, I would definitely implement everything superbly.
# 🎰 Lottery Game
> Lottert game using React

A simple React-based Lottery Game that demonstrates key React concepts like **component decomposition**, **distributed UI design**, and **lifting state up**. The game dynamically generates random lottery tickets and checks for win conditions based on customizable logic.

---
---

![Project Preview](https://github.com/Priyash-Das/Photos/blob/main/Lottery%20Game%20Using%20React.png)

---
---

## 📹 Video Demo
👉 [Watch the demo](https://github.com/Priyash-Das/Photos/blob/main/Lottery%20Game%20Using%20React.mp4)

---
---

## 🚀 Features

- 🎟️ Generates lottery tickets of **N-digit numbers** (configurable).
- 🧠 Supports **custom winning logic** using a `winCondition` function.
- 🔄 Instant ticket regeneration on button click.
- ✅ Real-time win evaluation and feedback.

## 📂 Project Structure

```
src/
│
├── assets/
│ ├── App.css
│ ├── Button.css
│ ├── index.css
│ ├── Ticket.css
│ ├── TicketNum.css
│
├── App.jsx # Root component; defines game logic
├── Lottery.jsx # Main game controller component
├── Ticket.jsx # Visual representation of a lottery ticket
├── TicketNum.jsx # Single number component in a ticket
├── Button.jsx # Button component to buy a new ticket
├── helper.js # Utility functions like getTicket() and sum()
├── main.jsx # Entry point
```

---

## 🧱 Design Concepts

### 🧩 Component Decomposition

This project is cleanly **decomposed** into reusable components:

- `App.jsx` – Controls the game's logic and passes props downward.
- `Lottery.jsx` – Manages ticket state and game rendering.
- `Ticket.jsx` – Displays the entire ticket using `TicketNum` components.
- `TicketNum.jsx` – Shows a single number.
- `Button.jsx` – Triggers new ticket generation.

This modular design helps in maintaining code, reusing components, and testing easily.

### 🌐 Distributed Design

Each component handles a **single responsibility**, ensuring logic, styles, and structure are **separated across files** (`.jsx` for structure and logic, `.css` for styling). This results in a **distributed and scalable** design pattern ideal for larger projects.

### 🔼 Lifting State Up

The `Lottery.jsx` component holds the **ticket state** and passes it down to child components (`Ticket`, `TicketNum`). The **win condition logic** is defined in the top-level `App.jsx` and passed down via props, making it **reusable and customizable** – a clear example of **lifting state and logic up** to a common ancestor for shared access.

---

## ⚙️ Customization

You can define any winning condition by modifying the `winCondition` function in `App.jsx`. Examples include:

```js
// Winning if first digit is 0
let winCondition = (ticket) => ticket[0] === 0;

// Winning if all digits are equal
let winCondition = (ticket) => ticket.every((num) => num === ticket[0]);

// Winning if sum of digits equals 15
let winCondition = (ticket) => sum(ticket) === 15;
```

---

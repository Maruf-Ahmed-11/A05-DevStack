# Name of my project  
DevStack Building


# A little description
-A responsive, interactive web application designed to help developers explore, compare, and build their ideal technology stack. Users can browse various tools categorized by frontend, backend, database, and tooling, assemble their custom stack, and manage selections seamlessly with live feedback.

# Technologies Used
* **Frontend Library:** React (with `Suspense` and React 19 architecture)
* **Language:** TypeScript
* **Styling:** Tailwind CSS & DaisyUI
* **Notifications:** React-Toastify

# Key Features
1. **Interactive Tech Stack Builder:** Browse through an array of technologies and pick them to build your custom development stack in real-time.
2. **Smart Duplicate & State Management:** Built-in safeguards that instantly notify you if you attempt to add a technology that is already in your stack.
3. **Sticky Sidebar & Toast Alerts:** A persistent side panel tracking your selected technologies with instant visual toast notifications for additions, removals, and clearing your stack.




# 🚀 DevStack

> Curated tools, technologies, and resources for developers building modern software.

## 📝 About
**DevStack** is a responsive, interactive web application designed to help developers explore, compare, and build their ideal technology stack. Users can browse various tools categorized by frontend, backend, database, and tooling, assemble their custom stack, and manage selections seamlessly with live feedback.

## 🛠️ Technologies Used
* **Frontend Library:** React
* **Language:** TypeScript
* **Styling:** Tailwind CSS & DaisyUI
* **Notifications:** React-Toastify

## ✨ Key Features
1. **Interactive Tech Stack Builder:** Browse through an array of technologies and pick them to build your custom development stack in real-time.
2. **Smart Duplicate & State Management:** Built-in safeguards that instantly notify you if you attempt to add a technology that is already in your stack.
3. **Sticky Sidebar & Toast Alerts:** A persistent side panel tracking your selected technologies with instant visual toast notifications for additions, removals, and clearing your stack.

---

## 💡 React Questions & Answers


### i. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like code directly inside JavaScript files. It is used in React because it makes writing and visualizing UI components much easier.

### ii. What is the difference between props and state?
Props are passed down from a parent component to a child component and are read-only (immutable). And State is managed internally within a component and can change over time when users interact with the app.

### iii. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook lets us add state to functional components so we can track and update data. In this project, we used `useState` in `Tech.tsx` to manage the `selectedStack` array when adding or removing technologies.

### iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook lets us run side effects (like data fetching or subscriptions) after a component renders. 

### v. Why does every item in a `.map()` list need a unique `key` prop?
React uses unique `key` props to track which items have changed, been added, or been removed. This helps React update the UI efficiently without re-rendering the entire list.

### vi. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means displaying different UI elements based on certain conditions (like using JavaScript ternary operators or `&&`). We used it in `StackSidebar.tsx` to display either the list of selected tech items or a dashed message saying *"Your stack is empty"* when no items are chosen.

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
* **Parent to Child:** We pass data using **props** (e.g., passing `tech` from `Tech.tsx` down to `TechCard.tsx`).
* **Child to Parent:** Since data flows downward, a child sends info back by calling a **callback function** passed down as a prop by the parent (e.g., calling `onAddToStack(tech)` or `onRemoveTech(id)` from the child to update the parent's state).
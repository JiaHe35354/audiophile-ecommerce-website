# Frontend Mentor - Audiophile e-commerce website solution

This is my solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [My thought](#my-thought)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [What I added to this project](#what-i-added-to-this-project)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Links

- Solution URL: [My solution]()
- Live Site URL: [Live Site URL](https://audiophile-ecommerce-website-jiah.netlify.app/)

## My process

### My thought

This project required a wide range of skills, and I decided to build it with **React** and **Tailwind CSS**. I chose React because the project includes many different parts and dynamic content. React helps manage complexity by splitting the code into reusable components and integrating JavaScript logic directly within the UI. Compared to plain JavaScript, React makes the codebase cleaner, more scalable, and much easier to maintain.

For data management, I used a **DataContext** component. Inside it, I implemented a reducer function called shoppingReducer, which contains all the logic for handling actions. The reducer is used within the DataContextProvider function, which provides all the necessary data and methods to other components. Any component that needs this data can simply access it using the useContext hook. This approach keeps the data flow organized and the structure of the project cleaner.

On the styling side, **Tailwind CSS** helps me write styles with minimal code. It simplifies the design process while keeping everything consistent and responsive.

Overall, this setup makes the project much more maintainable, scalable, and easier to extend in the future.

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [React Router](https://reactrouter.com/) - Routing library for React
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

### What I learned

Throughout this project, I learned how to build a medium-scale React application that includes multiple routes using **React Router**.

1. First, I defined the main paths and their corresponding page components. Once the routes were set up, I was able to organize the structure of each page by adding smaller components. This approach made the project easier to manage and more scalable. Here’s a simplified example of the route setup:

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: ":category",
        children: [
          { index: true, element: <CategoryPage /> },
          { path: ":productSlug", element: <ProductDetailPage /> },
        ],
      },

      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
```

2. For dynamic pages, I used the useParams hook to get category or product names directly from the URL. This allowed me to filter and display the correct data dynamically. For example, in Category.jsx, I used the following logic:

```jsx
const { category } = useParams();

const filteredProducts = products
  .filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  )
  .reverse();
```

3. When adding products to the cart, I found it a bit challenging at first because I had to handle immutable state updates correctly. I used the spread syntax to copy the state, checked if the product already existed in the cart, and then either updated the quantity or added a new item. Here’s part of my logic for the "ADD_ITEM" action:

```jsx
if (action.type === "ADD_ITEM") {
const updatedItems = [...state.cartItems];
console.log(state.cartItems);

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.payload.quantity,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      updatedItems.push({
        id: action.payload.id,
        image: product.cartImage,
        name: product.name,
        price: product.price,
        quantity: action.payload.quantity,
      });
    }
```

4. Another challenging but valuable part was **form validation**. I built a custom form action function called checkoutAction that handles validation and displays clear error messages. If there are errors, the entered data remains in the form so users don’t have to retype everything. Each field shows its specific error message below it.

```js
function checkoutAction(prevFormState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phoneNumber = formData.get("phone-number");
  const address = formData.get("address");
  const zipCode = formData.get("zip-code");
  const city = formData.get("city");
  const country = formData.get("country");
  const paymentMethod = formData.get("payment-method");
  const eMoneyNumber = formData.get("e-money-number");
  const eMoneyPin = formData.get("e-money-pin");

  let errors = {};

  if (!isNotEmpty(name)) errors.name = "This field is required.";
  if (!isNotEmpty(address)) errors.address = "This field is required.";
  if (!isNotEmpty(city)) errors.city = "This field is required.";
  if (!isNotEmpty(country)) errors.country = "This field is required.";
  if (!isEmail(email)) errors.email = "Invalid email.";
  if (!phoneRegex.test(phoneNumber))
    errors.phoneNumber = "Invalid phone number.";
  if (!zipRegex.test(zipCode)) errors.zipCode = "Invalid ZIP code.";

  if (paymentMethod === "e-money") {
    if (!eMoneyNumberRegex.test(eMoneyNumber))
      errors.eMoneyNumber = "Invalid e-Money number.";

    if (!pinRegex.test(eMoneyPin))
      errors.eMoneyPin = "PIN must be exactly 4 digits.";
  }

  const hasError = Object.keys(errors).length > 0;

  return {
    errors,
    enteredValues: {
      name,
      email,
      phoneNumber,
      address,
      zipCode,
      city,
      country,
      paymentMethod,
      eMoneyNumber,
      eMoneyPin,
    },
    submitted: !hasError,
  };
}
```

Overall, this project taught me how to manage routing, dynamic data, reducer logic, and form validation — all essential skills for building real-world React applications.

### What I added to this project

1. I added a small improvement to the cart icon in the navigation bar. When there are products in the cart, a number appears next to the icon to indicate how many items the user has added. If the cart is empty and the user clicks it, a message saying “No items in cart!” appears. This makes the user experience clearer and more intuitive.

2. I also implemented error handling to make the app more user-friendly. If a user tries to access a non-existent category or product by typing it in the URL, a custom error page will appear instead of a blank or broken screen, letting the user know that the page doesn’t exist.

### Continued development

In this project, I practiced using useContext and useReducer to manage data and state. In future projects, I’d like to work with Redux to deepen my understanding of state management and learn how to handle data flow on a larger scale.

I also want to keep practicing building dynamic content, since it’s an essential part of most real-world applications.

### Useful resources

- [Pure CSS Custom Styled Radio Buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/) - This article helped me style the radio buttons on the checkout page using only CSS, without relying on JavaScript.

- [Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context) - This guide helped me understand how to manage state efficiently by combining useReducer and useContext in React.

- [Dynamic segment in Routing](https://reactrouter.com/start/declarative/routing#dynamic-segments) - This resource helped me implement dynamic routes for categories and products using React Router.

## Author

- Frontend Mentor - [@JiaHe35354](https://www.frontendmentor.io/profile/JiaHe35354)

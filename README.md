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

This project requires many skills, and I choose React with Tailwind CSS to do it. The reason for that is the project contains a lot of parts and it needs many dynamic content. React can solve the problem that JavaScript can't do, e.g., with JS there will be much more code and not scalable. React can split the whole code into small components, and integrate JS code into HTML, it's easy to maintain.

I fetch the data from DataContext.jsx. In this component, I use a reducer function 'shoppingReducer' that write the logic of all the actions inside a function. And then dispatches them inside DataContextProvider function, this function provide all the data that need other components. Just putting all the data and function inside one component, and for components that need these data, I use useContext to get the data. This is cleaner.

On the other hand, Tailwind CSS can make the style with less code so that it's simpler.

In this way, I think the project is more maintainable and scalable.

### Built with

- Mobile-first workflow
- Tailwind CSS
- [React](https://reactjs.org/) - JS library
- [React Router](https://reactrouter.com/) - React routing library

### What I learned

Throughout this project, I learned how to do a medium project containing diferrent routes with React and React Router. Firstly, I needed to define the path and the page components. With these, then I could add components to each page. This is a better way of starting the project. Below is the snippet of the path defining:

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

For the dynamic data, for example, get the category data, I use useParams to get the dynamic category name and display the category page. And also for getting product. For example, in Category.jsx, using useParams to get the dynamic category in the URL, then filter the products of same category:

```jsx
const { category } = useParams();

const filteredProducts = products
  .filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  )
  .reverse();
```

When add the product to the cart, the logic isn't easy to me. Firstly, the original state can't be changed, so I need to copy it with spread syntax. Then I need to find if the item is existing in the cart, if it exists, I just update the cart item's quantity; if not, I add the new item to the cart and set it's data shape. This is the code for "ADD_ITEM":

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

Validating the form is another difficult issue, I use the form action function checkoutFunction. This function can handle the error when submit the form. If there's some error, the input fields can be persisted of the data entered so that users won't fill all the inputs from the start, and below every the correspond input the error message appears.

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

### What I added to this project

1. I added a small detail to the cart logo on navbar. When there are products in cart, it will show the number next to the cart logo. This will tell the user: "You have something in the cart". If the cart is empty and the user click it, it will show 'No items in cart!' what is more user friendly.

2. Another user friendly thing I added to this project is error handling. When the user try to type some non-existing category or product in the URL, the page will show the error or the page doesn't exist.

### Continued development

This time, I wanted to practice useContext and useReducer for the data. In future projects, I want to do with Redux so that I can handle these methods to get and store data.

Also I want to do more practice that displays dynamic content, it's an important part for the majority of real world projects.

### Useful resources

- [Pure CSS Custom Styled Radio Buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/) - This helped me for styling radio button on checkout page.

- [Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context) - This helped me for storing data in just one component and provide it to whichever component that needs the data.

- [Dynamic segment in Routing](https://reactrouter.com/start/declarative/routing#dynamic-segments) - This helped me to get the data dynamically.

## Author

- Frontend Mentor - [@JiaHe35354](https://www.frontendmentor.io/profile/JiaHe35354)

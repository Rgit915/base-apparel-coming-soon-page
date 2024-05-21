# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Desktop solution preview](https://github.com/Rgit915/base-apparel-coming-soon-page/blob/master/src/assets/solution/desktop-solution-preview.png)

![Tablet solution preview](https://github.com/Rgit915/base-apparel-coming-soon-page/blob/master/src/assets/solution/tablet-solution-preview.png)

![Active states solution preview](https://github.com/Rgit915/base-apparel-coming-soon-page/blob/master/src/assets/solution/active-states-solution-preview.png)

<div>
       <img src="https://github.com/Rgit915/base-apparel-coming-soon-page/blob/master/src/assets/solution/mobile-soultion-preview.png" alt="Mobile solution Screenshot" width="300">
</div>

### Links

- Solution URL: [Github Repo](https://github.com/Rgit915/base-apparel-coming-soon-page)
- Live Site URL: [Live Demo](https://base-apparel-coming-soon-rora.netlify.app)

## My process

### Built with

- Sematic HTML5
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

## 1. React State Management
- **useState Hook**: Utilized the `useState` hook to manage form input (`email`) and error state.
- **State Updates**: Implemented functions (`handleInputChange`, `handleSubmit`) to update and handle state changes based on user interactions.

## 2. Form Validation
- **Email Validation**: Created a regex-based function `validateEmail` to ensure the email format is correct.
- **Error Handling**: Implemented error handling to display error messages when the email input is empty or incorrectly formatted.

## 3. Conditional Rendering
- **Dynamic Classes**: Used template literals to conditionally apply CSS classes based on error state.
- **Rendering Elements**: Conditionally rendered elements like error messages and icons based on the error state.

## 4. CSS Styling and Positioning
- **Utility Classes**: Applied Tailwind CSS utility classes for layout, spacing, typography, and colors.
- **Custom Classes**: Extended Tailwind CSS to include custom color and gradient definitions.
- **Responsive Design**: Ensured responsive design using Tailwind's responsive utilities.
- **Absolute Positioning**: Used `absolute` positioning to place elements (error icon, button) correctly within the form.
- **Flexbox**: Utilized Flexbox (`flex`, `items-center`, `justify-center`) for layout alignment.
- **Gradients and Shadows**: Applied gradients and shadows for enhanced visual styling.


## 5. Custom Utility Layer in Tailwind CSS
- **Layer Utilities**: Added custom utilities for specific responsive background image handling.
- **Responsive Background Image**: Ensured background image adapts correctly on medium and large screens using custom CSS.

```css
@layer utilities {
  @screen md {
    body::after {
      content: "";
      position: fixed;
      top: 0;
      left: 50%;
      right: 0;
      bottom: 0;
      background-image: url("./assets/images/hero-desktop.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      z-index: -1;
    }
  }
  @screen lg {
    body::after {
      left: 60%;
    }
  }
}

```
### Continued Development

In future projects, I plan to further explore:

- Advanced form validation techniques, including real-time validation as the user types.
- Incorporating animations and transitions for a more interactive user experience.
- Exploring more Tailwind CSS customizations and extending utility classes for complex layouts.

### Useful Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html) - The official React documentation is always my go-to resource for understanding React concepts and best practices.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - The Tailwind CSS documentation provides comprehensive guidance on using Tailwind's utility classes effectively.


## Author

- Frontend Mentor - [@Rgit915](https://www.frontendmentor.io/profile/yourusername)
- Github - [@Rgit915](https://www.twitter.com/yourusername)

## Acknowledgments
I would like to thank [Frontend Queens](https://beacons.ai/frontendqueens) for providing this challenge and motivating us to work on various aspects of challenges, as well as [Frontend Mentor](https://www.frontendmentor.io/) for their platform that enable developers to practice and enhance their skills through real-world projects.
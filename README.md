Multi-step Form

This is a repository containing a multi-step form made with HTML, CSS, and JavaScript. The form is divided into multiple steps, and the user must fill out all the required fields on each step before moving to the next one.
How to Use

To use the multi-step form in your project, follow the steps below:

    Download the files from the repository or clone it using the following command:

bash

git clone https://github.com/Mornieur/Multi-step_Form.git

    Copy the files index.html, styles.css, and script.js to your project.

    Update the form fields, including the input types, names, and placeholders, in the HTML file according to your needs.

    Configure the form validation in the JavaScript file by updating the rules and error messages as necessary.

javascript

const formValidation = () => {
  // Define your validation rules here
};

const validationErrorMessages = {
  // Define your error messages here
};

    Customize the styles in the CSS file to match your project's design.

css

/* Add your custom styles here */

Example

Check out an example of a multi-step form in HTML:

html

<form id="multi-step-form" class="form-container" novalidate>
  <div class="form-step">
    <h2>Step 1</h2>
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
  </div>
  <div class="form-step">
    <h2>Step 2</h2>
    <input type="password" name="password" placeholder="Password" required>
    <input type="password" name="confirm_password" placeholder="Confirm Password" required>
  </div>
  <div class="form-step">
    <h2>Step 3</h2>
    <input type="tel" name="phone" placeholder="Your Phone Number" required>
    <input type="text" name="address" placeholder="Your Address" required>
  </div>
  <div class="form-step">
    <h2>Step 4</h2>
    <input type="text" name="city" placeholder="Your City" required>
    <input type="text" name="state" placeholder="Your State" required>
    <input type="text" name="zip" placeholder="Your Zip Code" required>
  </div>
  <div class="form-buttons">
    <button type="button" id="prev-button" onclick="prevStep()">Previous</button>
    <button type="button" id="next-button" onclick="nextStep()">Next</button>
    <button type="submit" id="submit-button">Submit</button>
  </div>
</form>

Credits

This repository was created by Mornieur.

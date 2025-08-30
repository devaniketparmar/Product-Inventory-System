Build a basic Product Inventory System using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

Requirements:
Product Management:

Implement a form to add new products with the following fields:

Name (must be unique)

Description

Quantity

Categories (should support selecting multiple categories). These categories will be added into DB by a seeder, no need to create a section for its management.


Listing Page:


Create a paginated product listing with:

Product name

Categories (shown as tags/bubbles)

Product added on

Option to delete a product

Include numbered pagination (1, 2, 3, …).


Filters:


Add the ability to search products by name.

Include a multi-select dropdown to filter by categories:

If a product belongs to any of the selected categories, it should appear in the result.


Constraints:
Duplicate product names should not be allowed.

Follow best practices for code structure, validation, and UI/UX.

Implement both client-side and server-side validation.

Proper error handling and user feedback should be provided

Performance and scaling should be considered when setting up the structure.


Foods Project - Frontend
This project is a web application built with React, TypeScript, and Bootstrap, designed for managing food items and user authentication. The application includes a **category** list featuring **fruits**, **vegetables**, and **snacks**. **Users** can **create** and **edit** food items, while **deletion** is restricted to **administrators**. Features like a **search bar**, **sorting**, and **pagination** make it easy to navigate and manage the content. The application also supports **user registration** and **secure login** for accessing protected features.

**Note**: Parts of the site, such as the **Customers** page and **Orders** page, are still under construction. As mentioned, the delete function is only available to the admin.

**Note:** To create and edit you first need to register an account on the site. Once you do, you will be **automatically logged in**. If you don’t register and click on one of the food items you will be **redirected to the login page.**

![Main](https://github.com/user-attachments/assets/ff1282da-a046-4eda-b3bb-ca1f945786a1)

To create a new food, click on "**New Food**" button and and fill out the form. Click then on "**Save**" button. 
![Majs](https://github.com/user-attachments/assets/f64ea387-64c7-403b-979e-5752f9ad52fa)

The new food item is saved in the database. The foods.length is now 7. Due to **name sorting** "corn" has moved to the second page. You can also find it under **Vegetables**, where you can see how foods.length updates.
![Skapat en majs](https://github.com/user-attachments/assets/eef70c6a-4f50-424a-ab67-3513c2c0b3ec)

To update a food item, click on its **name**. Then make the desired changes and click the "**Save**" button. In this case, I edited "Apple" changing the letter "**A**" to the Swedish letter "**Ä**" adjusting the **stock** from 41 to 31 and changing the **price** from 23 to 12. After that the page refreshes, and the updated food item appears last on page two according to name sorting. You can also change the **image** if you want.
![Update Apple](https://github.com/user-attachments/assets/f59324a5-0ff4-4738-ba58-762d6df0b5d1)









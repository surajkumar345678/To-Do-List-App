[![Netlify Status](https://api.netlify.com/api/v1/badges/9292cc7d-e04b-48c1-b494-a1d693c9fcdc/deploy-status)](https://app.netlify.com/sites/crudapp-js/deploys)
# CRUD-APP

What is CRUD?

What is CRUD?
Create, Read, Update, and Delete (CRUD) are the four basic functions that models should be able to do, at most.
Create, Read, Update, Delete

CREATE – this feature will add a new student to the app/database by some trigger, for example, by pressing the “Add” button in the application, which will call the corresponding function. The program calling the function would supply the values ​​for “first_name”, “last_name”, and “course”. After the function is called, a new student record will appear in the database.

READ – this function allows you to see if there is a record about a specific student in the database. This function does not change the information about the student in any way, but only allows you to get information about him. You can also see a certain attribute.

UPDATE is a function that changes information about a student. Let’s write his name. After the function is applied, the corresponding record in the database table will be changed.

DELETE – of course, everything should be clear here. This function either completely removes the object or removes its selected attribute.

When we are building APIs, we want our models to provide four basic types of functionality. The model must be able to Create, Read, Update, and Delete resources. Computer scientists often refer to these functions by the acronym CRUD. A model should have the ability to perform at most these four functions in order to be complete. If an action cannot be described by one of these four operations, then it should potentially be a model of its own.

The CRUD paradigm is common in constructing web applications, because it provides a memorable framework for reminding developers of how to construct full, usable models. For example, let’s imagine a system to keep track of library books. In this hypothetical library database, we can imagine that there would be a books resource, which would store book objects.

![image](https://user-images.githubusercontent.com/60316890/172036548-516d1205-8e49-42c0-ab80-f03f4c660df0.png)
![image](https://user-images.githubusercontent.com/60316890/177035271-447afa04-da58-4fc4-9dab-cd658980b429.png)

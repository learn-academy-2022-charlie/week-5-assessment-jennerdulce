# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

  Your answer: A hash in Ruby is similar to that of an object in JavaScript, in that, it is a container for data and contains a collection of key and values. HOWEVER, it is ONLY a collection of key and value pairs. Hashes are not entirely objects as they do not contain any methods. From experience, I know that hashes are also enumerable, meaning hashes are iterable similar to string and arrays. In order to access a value, the notation is `hash_name[:keyname]` which is different thatn `hash_name.keyname` in JavaScript

  Researched answer: A hash in Ruby is similar to an array in that, it is a container for data. HOWEVER,  that main difference is that it is a collection of key and value pairs. In order to reference from a hash is by using their unique keys rather than referenceing an index. For example, to access a value, the notation is `hash_name[:keyname]`. From experience, I know that hashes are also enumerable, meaning hashes are iterable similar to string and arrays. While learning Hashes, I was also taught about CRUD operations which is an acronym for Create, Read, Update, Delete. CRUD is a concept of manupliating data and this CRUD concept was foundatinal knowledge that helped me later understand interaction with databases by using REST methods. Furthermore, I have often used higher order functions such as `.map` ,`.select` and `.each` on through Ruby objects / hashes in in order allowing me to iteration on the information so that I can modify, sort, and perform other actions in order to manipulate the data into the information that I need. 

- Reference: [Ruby Hashes](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/ruby/hashes.md)

2. What is a gem?

  Your answer: A gem is a package or library of information that developers can download on their computer using a terminal command. Similar to a package that you would download using yarn while developing with JavaScript. A gem downloads a package / library that contains a list of dependencies that allow the package / library to work. The contents of these packages are code bases that have been created by other developers and are available to be implemented in other projects with ease. By downloading these gems, technologies are readily available.

  Researched answer: A gem is a package or library of information that developers can download on their computer using a terminal command. Similar to a package that you would download using yarn while developing with JavaScript. A gem downloads a package of Ruby code. This package contains a list of dependencies that allow the package / library to work. The contents of these packages are code bases that have been created by other developers and are available to be implemented in other projects and shared with others. By downloading these gems, technologies are readily available for immediate use. I have used gems for multiple occasions. One occasion is testing using Rspec that I use fairly often which developing code using the concept of Test Driven Development and just over all general test case uses.

- Reference: [Ruby Testing with RSpec](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/ruby/rspec.md)

3. What is Ruby on Rails?

  Your answer: Ruby on rails is a fast and effective way to build a full-stack application. Ruby on Rails uses a developing blueprint known as MVC (Model View Controller). MVC works around the idea of "Convenience over Configuration". Ruby on Rails is built in a strict way saying "Hey give me all the parts that I need and I will give YOU a fantastic website."

  Researched answer: Ruby on rails is a server-side application framework that uses a MVC architectural pattern that is commonly used in the full-stack development world. Ruby on Rails follows the principle of "Convention over Configuration" that allows the developer to provide the required parts in order to built a website while ignoring all the activity that is happening under the hood. MVC stands for Model, View, Controller which are the core parts in order to develope a full-stack application utilizing Ruby on Rails. Model is the database layer, the View is what the user will see, and Controller collects appropriate data from the Model overall updating / modifying the View, connecting the two together

- Reference: [Ruby on Rails](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/rails/rails-intro.md)

4. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is a type of database structure that utilizes RELATIONSHIPS. The idea behind relationships is to separate other tables that will ultimately organize data. This is unique to this specific type of database. Another popular type of database is MongoDB which is a document database. From knowledge I know that one is not better than the other and that they both have their own use cases and benefits. Exactly what I am unsure.

  Researched answer: A relational database is a database that is structured similar to an Excel spreadsheet or Google Sheet where the document of information is displayed on a table with columns, rows, and headers. With this, an important feature of relational databases is that tables can have RELATIONSHIPS with other tables that link tables together and organize data more efficiently. There is another type of popular database that is recognized that that uses a document database model. MongoDB and DynamoDB are two of the most popular document databases. From experience, I have worked with both. I used a relational database for basic user information to reference to. I also used DynamoDB / MongoDB for a social media project that I previously built. I know that one is not better than the other and that they both have their own use cases and benefits.

- Reference: [Introduction to Databases](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/postgresql/intro.md)


5. What are primary keys? Why are they important?

  Your answer: Primary keys are important because they act as an ID for each instance on the table / each row on the table. Primary keys are also used to link tables together while using relational databases. Being able to link tables leads to a less cluttered and more organize database. From experience, I have used primary keys and critical thinking to plan out how I want to structure my database and tables accordingly. I also have used primary keys as a way to retrieve the information of that instance by using commands within the rails console.

  Researched answer: Primary keys are important because they act as a `unique identifier` for each instance on the table / each row on the table. Primary keys are also used to link tables together while using relational databases. It is worth noting that since Primary Keys are unique, it can prevent problems from that arrive from duplicate instances, we can always tell them apart by their unique Primary Key ID. Being able to link tables leads to a less cluttered and more organize database. From experience, I have used primary keys and critical thinking to plan out how I want to structure my database and tables accordingly. I also have used primary keys as a way to retrieve the information of that instance by using commands within the rails console.
  - Referring to the syllabus, I feel like I have expressed a primary key effectively.

- Reference: [Introduction to Databases](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/postgresql/intro.md)


## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: REST stands for Representational State Transfer and is a common pattern to follow when structuring routes. Rails follows a RESTful pattern for interaction between the client and the server. RESTful HTTP verbs perform with their corresponding CRUD actions in order to read, update, create, and delete database information. This is the topic that will overview how routes are created for websites and web-applications.

- Reference: [Rails RESTful Routes and CRUD Actions](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/rails/restful-routes-crud.md)

2. JSON: A JSON file is commonly used to display information from an API or database.  JSON files are used as a`response` when a client requests information from an API. JSON files are structured in a way that is easily able to work with which is an array of objects. From here, developers are able to user higher order functions to manipulate the retrieved data to be used and displayed on a webpage or web-application

- Reference: [Postman: Interacting with JSON APIs](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/rails/postman.md)

3. ERB: ERB (Embedded Ruby) is a templating engine that allows developers to mix HTML and ruby in order to build webpages. ERB is the default engine used  by Rails to render views (View). ERB files end eith a `.html.rb` or `.erb` extension. You write HTML in ERB files.

- Reference: [Ruby Templating Engines: ERB, HAML & Slim](https://www.rubyguides.com/2018/11/ruby-erb-haml-slim/)

4. Params: Routes can be created with query parameters. In a sesnse, using parameters are able to make routes dynamic. Similarly to creating a function with parameters, you can create a route that has parameters. These parameters come from user input.

- Reference: [Rails Controllers, Routes, and Views](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/rails/controllers-routes-views.md)

5. API: API stands for Application Programming Interface. From experience and knowledge, an API is essentially a database. Companies may have long running and well maintained APIs that other developers have access to. By making requests to these APIS utilizing asynchorous functions, developers are able to retrieve  (read only) the data.

- Reference: [Postman: Interacting with JSON APIs](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/rails/postman.md)

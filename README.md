# my_awesome_commerce_site

A website with listing ads.

## Installation
Before installing all the dependencies, please install

```
npm install -g json-server
```
For my project, i have decided to run my own local API server. So, this is the best emulation that i have found so far.

Then, in terminal:
```
npm install

```
### Getting Started

Before starting npm, type:
```
json-server --watch test_data.json --port 3004

```
This will turn the JSON server on.
Then, in a different shell:

```
npm start

```
Note: The actual server is running on localhost:3000, while the APIserver is running on localhost:3004.

### Other

This is my first project that i have built using React+Redux.

Getting all the components together and understanding the concepts of working these two libraries together, was indeed the hardest part.

I have decided to use react-router in my project because, with react router we no longer making requests to the server to serve a new html page, instead react-router intercepts changes to url. it stops the user from navigating to the different page, and manually looks at url and decides to display different set of the components on the screen based of what that url is. I found it very interesting and decided to try.
Also, i used the reduxforms for validating and submitting the login form.
Axios was used for making an ajax requests to the local API server(using promises).

I was trying to focus more on retrieveing and displaying the data, that i was getting, and decided to go with a simple responsive design. Stylings for most of the time were made with a bootstrap.

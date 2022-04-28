Next Bootstrap UI Kit
---------------------

Next UI Kit is a High end, fully featured premium template built on top of Bootstrap v5 to help developer maximize their productivity when building web app based on bootstrap. It's crafted using modern web technologies like HTML5, CSS3 and javascript. 

The UI template includes beautiful dashboard, ready to use snippets and hand crafted and components, widgets, pages that are fully responsive and customizable.

Each snippet can be easily integrate into any pages. 

It's a powerful and super flexible, which suits best for web applications including CRM, CMS, Admin Panels, Dashboards, etc. It is fully responsive, which means that it looks perfect on mobiles and tablets. Also, we tried to implement this by keeping the concept of modularity in mind, this enables you to reduce the development time and cost.

This documentation is a guidelines for all users who can even be a beginner or experienced web developer.

We really care for our buyers and so in case if you are having any question or feedback, please feel free to get back to us via email nelhamstrong@gmail.com or by filling out the contact form on our website.

Also you can read more on the documentation on how it's work

https://nextbootstrap-docs.netlify.app/html/index.html

or just have a demo of the pack and all the different features.

https://nextbootstrap.netlify.app/





## Development Environment Tools

![](../assets/images/misc/powered_by.png)

### Bootstrap 5

Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery. [https://getbootstrap.com/](https://getbootstrap.com/)

### Gulp

Gulp is a cross-platform, streaming task runner that lets developers automate many development tasks. [https://gulpjs.com/](https://gulpjs.com/)

### Jekyll

Jekyll is a static site generator. You give it text written in your favorite markup language and it uses layouts to create a static website. You can tweak how you want the site URLs to look, what data gets displayed on the site, and more. [https://jekyllrb.com/](https://jekyllrb.com/)

### Next Sidebar

Next sidebar is a Free Minimalistic but perfect Sidebar Menu for your Admin Application created to work on top of bootstrap 5. it fully functional and will speed up your web development process.

[![downoad](https://img.shields.io/npm/dt/next-sidebar)](https://img.shields.io/npm/dt/next-sidebar) [![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/Nelh/Next-sidebar/blob/main/LICENSE)  
[![npm](https://badge.fury.io/js/next-sidebar.svg)](https://badge.fury.io/js/next-sidebar)  

[![](https://nodei.co/npm/next-sidebar.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/next-sidebar/)

## Structure

Extract the zip file you received after purchase and you will find the exact below files and folders:

    ├── Next UI  
        ├── demo 
        ├── src  
        |   ├── includes/
        |   ├── layouts/
        │   ├── assets/
        │   │   └── css/
        │   │   └── images/
        │   │   └── js/
        │   │   ├── scss/
        │   │   │   └── helpers/
        │   │   │   └── utilities/
        │   │   │   └── _custom.scss
        │   │   │   └── next.scss
        │   ├── html/
        │   │   └── html pages
        │   ├── config.dev.yml
        │   ├── config.yml
        │   ├── gulpfile.js
        │   ├── index.html
        |   └── package.json


More on the Installation here https://nextbootstrap-docs.netlify.app/html/started.html


----



## How to Get Started
You can start by installing Node Package Manager. Npm is a default package manager for the JavaScript runtime environment Node.js



```js
$ npm install --global npm@latest
```

To check whether is node succesfully install or not.

```js
$ npm --version
```

You can procced then by installing Gulp. Gulp is a cross-platform, streaming task runner that lets developers automate many development tasks. To install gulp globally run

```js
$ npm install --global gulp-cli
```

If you have previously installed gulp then remove it.

```js
$ npm rm --global gulp
```

To check whether is gulp succesfully install or not.

```js
gulp --version
```

You can procced then by installing Jekyll. Jekyll is a static site generator. You give it text written in your favorite markup language and it uses layouts to create a static website. You can tweak how you want the site URLs to look, what data gets displayed on the site, and more. To install Jekyll globally follow the instruction to the jekyll website

https://jekyllrb.com/docs/installation/
To check whether is Jekyll succesfully install or not

```js
$ jekyll -v
```

Then You set.



In the root of your project folder, run npm install to install all package.json dependency


```js
$ npm install
```

What next, you can launch your App with this command


```js
npm run dev
```

This command will execute all the assets(js,scss and html) to the _site folder separately.

If everything was installed correctly, you should see the compile version running on http://localhost:3000/

Note: If your http://localhost:3000/ is not available or set to a existing server please change the base url on your _config.dev.yml

There is two Yaml configuration files: _config.yml and _config.dev.yml that when running in development mode the _dev_ configuration file overrides `baseurl` and `jekyll-minifier` default values.


#### Include CSS


Copy and paste the stylesheet <link> into your <head> before all other stylesheets to load our CSS.

```html
<link rel="stylesheet" href="assets/css/next.css">
```

#### Include JS

Most of bootstrap components require the use of JavaScript to function. Specifically, they require jQuery, Bootstrap.bundle.js.
We added some popular plugins in the /vendor folder. Our next.js and different xxxx.custom.js file contains some additional scripts which may come handy for your project.


```html
<script src="assets/js/vendor/jquery.min.js"></script>  
<script src="assets/js/vendor/popper.min.js"></script>
<script src="assets/js/vendor/bootstrap.min.js"></script>  
<script src="assets/js/next.js"></script>
```


### Template Starter

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Next</title>
    <link rel="stylesheet" href="assets/css/vendor/perfect-scrollbar.css">
    <link rel="stylesheet" href="assets/css/vendor/prism.css">
    <link rel="stylesheet" href="assets/css/next.css">
</head>
    
<body class="app is-collapsed">
    <!-- Import Sidebar here  -->
    <!-- Check Next-sidebar docs for more  -->
    <div class="container-wide">
        <!-- Include navbar here  -->
        <!-- Include page content here  -->
    </div>
    
    <script src="assets/js/vendor/jquery.min.js"></script>  
    <script src="assets/js/vendor/popper.min.js"></script>
    <script src="assets/js/vendor/bootstrap.min.js"></script>  
    <script src="assets/js/next.js"></script>
</body>
</html>
        
```
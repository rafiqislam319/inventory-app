    		How to install vue3, vue-router 4 on laravel Project, setup a admin template and load components through vue-router

1.  Install fresh Laravel project.

2.  run 'npm install' -> will create node_modules file, need it because it install package and Libraries for js development.

3.  Now need to install vue-router along with few package---
    --> npm install vue@next vue-loader@next vue-router@next @vue/compiler-sfc babel-loader @babel/core

4.  run 'npm run dev' it will create css & js folder with app.css & app.js file under Public directory,
    we have to link-up this two file with our main view file - for example -> with welcome.blade.php file

        --------Now we are ready to go work with Vue3 with Laravel--------



        	Now we will setup a dashboard template in our project and will create component & will load them throgh vue-router4

5.  Replace welcome.blade.php file with our favourite admin template's index.html file.

6.  Copy all css/js/vendor/img from admin template and put them inside public->backend folder, then link all of them with welcome.blade.php file.

7.  Now we will work on vue component, we will do all of our vue things in resources->js folder.

8.  In app.js file we will create our vue app and mount it.

9.  we will create index.js file under router folder and have to link in app.js file.

10. In index.js file we will create router objects/instance and all routes and will configure them.

11. we will create all of our components under components folder and will import all component in index.js file.
12. We have to wrap our welcome.blade.php/ specific html file with id = "#app"

13. Then we have to use router-view tag where we want to load our component.
    10.In webpack.mix.js file we have to add .vue()
14. To overcome page not found issue we have to put following code in routes->web.php file.

    Route::get('/{vue_capture?}', function () {
    return view('welcome');
    })->where('vue_capture', '[\/\w\.-]\*');

        ---> That's it --->

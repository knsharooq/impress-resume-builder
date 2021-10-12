Steps to run the application:
1. Click on the "Code" dropdown button on top
2. Download ZIP
3. Expand the ZIP file and open the expanded folder in vs code
4. cd resume-builder
5. npm install
6. npm start
The application will open in "http://localhost:3000" in the browser


Steps to test the application:
1. "http://localhost:3000/" displays the create resume page.
2. Fill the fields.
3. Buttons are provided for adding more education and experience.
4. Skills section has auto-complete and can also be selected from the drop-up.
5. Finally click "Create Resume". 
6. All the fields must be filled with atleast 1 experience and 1 education. Otherwise, alert message is shown below the button.
7. Successfull creation leads to "http://localhost:3000/view" where the resume can be viewed.
8. The final resume can be downloaded from the button below.
9. Button for creating new resume is also provided which navigates back to the initial page. 


Code Details:
- Redux store is created in the index.js file
- Bootstrap import is also included in index.js file
- Routes are added in the App.js
- Compoenents are for each route are defined in the components folder 


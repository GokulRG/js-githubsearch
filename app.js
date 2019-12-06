//Init Github
const github = new GitHub();

//Init UI
const ui = new UI();

//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', event => {
    
    event.preventDefault();

    //Get input text
    const userText = event.target.value;

    if (userText !== '') {
        //Make HTTP GET call to get user
        github.getUser(userText).then(data => {
            if (data.profile.message === 'Not Found') {
                //Show Alert -- User Not Found
            } else {
                //Show Profile Information
                ui.showProfile(data.profile);
            }
        });
    } else {
        //Clear UI and Profile
    }
});
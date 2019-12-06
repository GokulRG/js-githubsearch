class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        const company = user.company ? user.company : 'Not Available';
        const blog = user.blog ? user.blog : 'Not Available';
        const location = user.location ? user.location : 'Not Available';
        const created_at = new Date(user.created_at).toLocaleDateString();

        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-primary">Followers: ${user.followers}</span>
                        <span class="badge badge-primary">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${company}</li>
                            <li class="list-group-item">Website/Blog: ${blog}</li>
                            <li class="list-group-item">Location: ${location}</li>
                            <li class="list-group-item">Member Since: ${created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showAlert(message, className) {
        //Clear Any leftover alert
        this.clearAlert();
        //Create div from scratch and apply the given  message and style to display the alert
        const div = document.createElement('div');
        //Add classname
        div.className = className;
        //Add text by appending the text node as a child to the div
        div.appendChild(document.createTextNode(message));
        //Get parent element so that this can be added as a child to the parent
        const container = document.querySelector('.searchContainer');
        //Get Search box
        const search = document.querySelector('.search');
        //Insert Alert
        container.insertBefore(div, search);
        //Show Alert only for 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }
}
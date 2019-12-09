class GitHub {

    constructor() {
        this.client_id = '56ca4bf140a678fa6d06';
        this.client_secret = 'b1ec8a7d830316bfbfce10c6440ad8211f77e11a';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    //GET Users
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return { profile, repos };
    }
}
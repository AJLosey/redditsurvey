const config = {
    client_id: "Ncq-lWjnM1koGRK7BMkElw",
    client_secret: "eXPtq-Da9dt7ZySaCNevXkBi0lI-Eg",
    redirect_uri: "http://abba-172-58-198-55.ngrok.io/",
    auth_uri: "https://www.reddit.com/api/v1/authorize",
    duration: "permanent",
    scope: "identity,read,submit",
};

window.addEventListener("load", () => {
    const authCode = new URL(window.location).searchParams.get("code");
    if (authCode) {
        obtainToken(authCode);
    }
    debugger;
    document.getElementById("login-button").addEventListener("click", redditlogin);
});

function redditlogin() {
    const redditAuthUrl = new URL(config.auth_uri);
    redditAuthUrl.searchParams.append("response_type", "code");
    redditAuthUrl.searchParams.append("client_id", config.client_id);
    redditAuthUrl.searchParams.append("state", "a_string_of_your_choosing");
    redditAuthUrl.searchParams.append("redirect_uri", config.redirect_uri);
    redditAuthUrl.searchParams.append("duration", config.duration);
    redditAuthUrl.searchParams.append("scope", config.scope);

    window.location = redditAuthUrl;
};

function obtainToken(authCode) {

};



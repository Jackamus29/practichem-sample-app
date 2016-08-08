import md5 from 'js-md5';

class GravatarSource {
  constructor(jsonpCallback) {
    this.jsonpCallback = jsonpCallback;
    // JSONP callback function
    window.processProfile = (profileData) => {
      jsonpCallback(profileData.entry[0]);
    };
  }

  fetchProfile(email) {
    const hash = md5(email.trim().toLowerCase());
    // Need JSONP because of CORS... Would do this server-side if not in demo
    const script = document.createElement('script');
    script.src = `https://www.gravatar.com/${hash}.json?callback=processProfile`;

    document.querySelector('head').appendChild(script);
  }

}

export default GravatarSource;

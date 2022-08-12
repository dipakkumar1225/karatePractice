function fn() {
    let env = karate.env;
    karate.configure('ssl', true);
    karate.log('karate.env system property was:', env);

    if (!env) {
        env = Java.type('examples.users.utilities.ConfigReader').read("app.target.browser").trim();
    }

    const config = {
        env: env,
    };

    switch (env) {
        case "chrome":
            karate.configure('driver', {
                type: 'chromedriver',
                executable: Java.type('examples.users.utilities.Miscellaneous').getDriverFilePath() + "chromedriver.exe",
                addOptions: ["--start-maximized", "--window-size=\"" + Java.type('examples.users.utilities.Miscellaneous').getWindowResolution() + "\"", "--disable-extensions"]
            });
            break;

        case "firefox":
            karate.configure('driver', {
                type: 'firefox',
                addOptions: ["--incognito", "--window-size=\"" + Java.type('examples.users.utilities.Miscellaneous').getWindowResolution() + "\"", "--disable-extensions"]
            });
            break;

        default:
            karate.log('Given browser is not present');
    }
    return config;
}

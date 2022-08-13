function fn() {
    let env = karate.env;
    karate.configure('ssl', true);
    karate.log('karate.env system property was:', env);

    if (!env) {
        //Java function to read browser value from properties
        env = Java.type('examples.users.utilities.ConfigReader').read("app.target.browser").trim();
    }

    const config = {
        env: env,
    };

    /**
     * Below functions helps to set driver configuration globally, instead of calling in each feature file.
     * getWindowResolution() is Java function to get screen resolution/dimension
     * getDriverFilePath() is Java function to get the driver file path
     */

    switch (env) {
        case "chrome":
            karate.configure('driver', {
                type: 'chrome',
                addOptions: ["--no-default-browser-check", "--incognito", "--window-size=\"" + Java.type('examples.users.utilities.Miscellaneous').getWindowResolution() + "\"", "--disable-extensions"]
            });
            break;

        case "firefox":
            karate.configure('driver', { type: 'geckodriver', executable: Java.type('examples.users.utilities.Miscellaneous').getDriverFilePath() + "geckodriver.exe" });
            break;

        default:
            karate.log('Given browser is not present');
    }
    return config;
}

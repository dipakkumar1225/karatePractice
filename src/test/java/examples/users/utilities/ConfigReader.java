package examples.users.utilities;

import java.io.FileInputStream;
import java.util.Properties;

public class ConfigReader {

    private static final String FILE_NAME = "browser.properties";

    public static String read(String key) {
        Properties props = new Properties();
        try (FileInputStream fileInputStream = new FileInputStream(FILE_NAME)) {
            props.load(fileInputStream);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return props.getProperty(key);
    }
}

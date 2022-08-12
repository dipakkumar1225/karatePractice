package examples.users.utilities;

import java.awt.Dimension;
import java.awt.Toolkit;
import java.io.File;

public class Miscellaneous {

    public static String getWindowResolution() {
        Dimension size = Toolkit.getDefaultToolkit().getScreenSize();
        int width = (int) size.getWidth();
        int height = (int) size.getHeight();
        return width + "," + height;
    }

    public static String getDriverFilePath() {
        return System.getProperty("user.dir") + File.separator + "drivers" + File.separator;
    }

}

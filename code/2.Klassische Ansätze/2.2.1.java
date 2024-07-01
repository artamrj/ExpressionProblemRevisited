public abstract class Message {
    public abstract void send();
}

public class TextMessage extends Message {
    private String text;

    public TextMessage(String text) {
        this.text = text;
    }

    @Override
    public void send() {
        System.out.println("Sending text message: " + text);
    }
}

public class ImageMessage extends Message {
    private String imageUrl;

    public ImageMessage(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public void send() {
        System.out.println("Sending image message: " + imageUrl);
    }
}

public class VideoMessage extends Message {
    private String videoUrl;

    public VideoMessage(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    @Override
    public void send() {
        System.out.println("Sending video message: " + videoUrl);
    }
}

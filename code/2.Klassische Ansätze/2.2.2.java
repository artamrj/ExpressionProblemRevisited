interface MessageVisitor {
    void visit(TextMessage message);
    void visit(ImageMessage message);
    void visit(VideoMessage message);
}

abstract class Message {
    public abstract void accept(MessageVisitor visitor);
}

class TextMessage extends Message {
    private String text;

    public TextMessage(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    @Override
    public void accept(MessageVisitor visitor) {
        visitor.visit(this);
    }
}

class ImageMessage extends Message {
    private String imageUrl;

    public ImageMessage(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    @Override
    public void accept(MessageVisitor visitor) {
        visitor.visit(this);
    }
}

class VideoMessage extends Message {
    private String videoUrl;

    public VideoMessage(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    @Override
    public void accept(MessageVisitor visitor) {
        visitor.visit(this);
    }
}

class SendMessageVisitor implements MessageVisitor {
    @Override
    public void visit(TextMessage message) {
        System.out.println("Sending text message: " + message.getText());
    }

    @Override
    public void visit(ImageMessage message) {
        System.out.println("Sending image message: " + message.getImageUrl());
    }

    @Override
    public void visit(VideoMessage message) {
        System.out.println("Sending video message: " + message.getVideoUrl());
    }
}

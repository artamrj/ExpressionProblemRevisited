interface IPost<C extends IPost<C>> {
    display(): void;
}

class TextPost<C extends IPost<C>> implements IPost<C> {
    content: string;

    constructor(content: string) {
        this.content = content;
    }

    display(): void {
        console.log(`${this.content}`);
    }
}

class CombinePost<C extends IPost<C>> implements IPost<C> {
    post1, post2: IPost<any>;

    constructor(post1: IPost<any>, post2: IPost<any>) {
        this.post1 = post1;
        this.post2 = post2;
    }

    display(): void {
        console.log("Combined Post:");
        this.post1.display();
        this.post2.display();
    }
}

const textPost1 = new TextPost("Hello World!");
const textPost2 = new TextPost("This is a text post");
const combinePost = new CombinePost(textPost1, textPost2);

textPost1.display(); // Ausgabe: Hello World!
textPost2.display(); // Ausgabe: This is a text post
combinePost.display(); // Ausgabe: Combined Post: Hello World! This is a text post
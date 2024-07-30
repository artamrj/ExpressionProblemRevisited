export interface Post<C extends Post<C>> {
    display(): void;
}

export class TextPost<C extends Post<C>> implements Post<C> {
    content: string;

    constructor(content: string) {
        this.content = content;
    }

    display(): void {
        console.log("\x1b[32m%s\x1b[0m", `POST: ${this.content}`);
    }
}

export class CombinedPost<C extends Post<C>> implements Post<C> {
    post1: Post<any>;
    post2: Post<any>;

    constructor(post1: Post<any>, post2: Post<any>) {
        this.post1 = post1;
        this.post2 = post2;
    }

    display(): void {
        console.log("\x1b[31m%s\x1b[0m", "COMBINED:");
        this.post1.display();
        this.post2.display();
    }
}
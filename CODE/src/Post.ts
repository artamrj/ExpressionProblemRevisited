export interface Post<C extends Post<C>> {
    display(): void;
}

export class TextPost<C extends Post<C>> implements Post<C> {
    content: string;

    constructor(content: string) {
        this.content = content;
    }

    display(): void {
        console.log(this.content);
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
        console.log("Combined Post:");
        this.post1.display();
        this.post2.display();
    }
}
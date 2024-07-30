import {CombinedPost, Post, TextPost} from './Post';

export interface Shareable<C extends Shareable<C>> extends Post<C> {
    share(): void;
}

export class ShareableTextPost<C extends Shareable<C>> extends TextPost<C> implements Shareable<C> {
    share(): void {
        console.log("\x1b[34m%s\x1b[0m","SHARED POST: " + this.content);
    }
}

export class ShareableCombinedPost<C extends Shareable<C>> extends CombinedPost<C> implements Shareable<C> {
    share(): void {
        console.log("\x1b[35m%s\x1b[0m", "SHARED COMBINED:");
        this.post1.display();
        this.post2.display();
    }
}
import {CombinedPost, Post, TextPost} from './Post';

export interface Shareable<C extends Shareable<C>> extends Post<C> {
    share(): void;
}

export class ShareableTextPost<C extends Shareable<C>> extends TextPost<C> implements Shareable<C> {
    share(): void {
        console.log("Sharing text post: " + this.content);
    }
}

export class ShareableCombinedPost<C extends Shareable<C>> extends CombinedPost<C> implements Shareable<C> {
    share(): void {
        console.log("Sharing combined post:");
        this.post1.display();
        this.post2.display();
    }
}
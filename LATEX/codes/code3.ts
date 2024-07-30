interface IShareable<C extends IShareable<C>> extends IPost<C> {
    share(): void;
}

class ShareableTextPost<C extends IShareable<C>> 
extends TextPost<C> implements IShareable<C> {
    share(): void {
        console.log("Sharing text post: " + this.content);
    }
}

class ShareableCombinePost<C extends IShareable<C>> 
extends CombinePost<C> implements IShareable<C> {
    share(): void {
        console.log("Sharing combined post:");
        this.post1.display();
        this.post2.display();
    }
}
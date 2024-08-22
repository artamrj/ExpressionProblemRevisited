interface IShareable<C extends IShareable<C>> extends IPost<C> {
    share(): void;
}

export class ShareableTextPost<C extends IShareable<C>> 
extends TextPost<C> implements IShareable<C> {
    share(): void {
        console.log("SHARED POST: " + this.content);
    }
}

export class ShareableCombinedPost<C 
extends IShareable<C>> extends CombinedPost<C> implements IShareable<C> {
    share(): void {
        console.log("\x1b[35m%s\x1b[0m", "SHARED COMBINED:");
        (this.post1 as IShareable<any>).share();
        (this.post2 as IShareable<any>).share();
    }
}
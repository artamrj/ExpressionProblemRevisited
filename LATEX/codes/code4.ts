interface IShareablePostFix extends IShareable<IShareablePostFix> {}

class ShareableTextPostFix extends ShareableTextPost<IShareablePostFix> 
implements IShareablePostFix {
    constructor(content: string) {
        super(content);
    }
}

class ShareableCombinePostFix extends ShareableCombinePost<IShareablePostFix> 
implements IShareablePostFix {
    constructor(post1: IPost<any>, post2: IPost<any>) {
        super(post1, post2);
    }
}
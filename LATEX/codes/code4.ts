interface IShareablePostFix extends IShareable<IShareablePostFix> {}

export class ShareableTextPostFix extends ShareableTextPost<IShareablePostFix> 
implements IShareablePostFix {
    constructor(content: string) {
        super(content);
    }
}

export class ShareableCombinedPostFix extends ShareableCombinedPost<IShareablePostFix> 
implements IShareablePostFix {
    constructor(post1: Post<any>, post2: Post<any>) {
        super(post1, post2);
    }
}
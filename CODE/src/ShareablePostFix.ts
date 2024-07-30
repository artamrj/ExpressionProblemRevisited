import {Shareable, ShareableCombinedPost, ShareableTextPost} from './Shareable';
import {Post} from "./Post";

export interface ShareablePostFix extends Shareable<ShareablePostFix> {}

export class ShareableTextPostFix extends ShareableTextPost<ShareablePostFix> implements ShareablePostFix {
    constructor(content: string) {
        super(content);
    }
}

export class ShareableCombinedPostFix extends ShareableCombinedPost<ShareablePostFix> implements ShareablePostFix {
    constructor(post1: Post<any>, post2: Post<any>) {
        super(post1, post2);
    }
}

import {ShareableTextPostFix, ShareableCombinedPostFix} from "./src/ShareablePostFix";

const post1Fix = new ShareableTextPostFix("Hello, world!");
const post2Fix = new ShareableTextPostFix("This is another text src");
const combinedPostFix = new ShareableCombinedPostFix(post1Fix, post2Fix);

post1Fix.display();
post1Fix.share();

post2Fix.display();
post2Fix.share();

combinedPostFix.display();
combinedPostFix.share();

const post1Fix = new ShareableTextPostFix("Hello, world!");
const post2Fix = new ShareableTextPostFix("This is another text post");
const combinedPostFix = new ShareableCombinePostFix(post1Fix, post2Fix);

post1Fix.display(); // Ausgabe: Hello World!
post1Fix.share(); // Ausgabe: Sharing text post: Hello World!

post2Fix.display(); // Ausgabe: This is a text post
post2Fix.share(); // Ausgabe: Sharing text post: This is a text post

combinedPostFix.display(); // Ausgabe: Combined Post: Hello World! This is a text post
combinedPostFix.share(); // Ausgabe: Sharing combined post: Combined Post: Hello World! This is a text post
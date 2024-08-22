const post1Fix = new ShareableTextPostFix("Hello, world!");
const post2Fix = new ShareableTextPostFix("This is another text src");
const combinedPostFix = new ShareableCombinedPostFix(post1Fix, post2Fix);

post1Fix.display(); // Ausgabe: POST: Hello, world!
post1Fix.share(); // Ausgabe: SHARED POST: Hello, world!
console.log(" ")

post2Fix.display(); // Ausgabe: POST: This is another text src
post2Fix.share(); // Ausgabe: SHARED POST: This is another text src
console.log(" ")

combinedPostFix.display(); // Ausgabe: COMBINED: 
// POST: Hello, world! POST: This is another text src
combinedPostFix.share(); // Ausgabe: SHARED COMBINED: 
// SHARED POST: Hello, world! SHARED POST: This is another text src
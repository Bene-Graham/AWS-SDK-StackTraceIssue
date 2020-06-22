"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_s3_1 = require("@aws-sdk/client-s3");
class AWSTest {
    async run() {
        const c = new AWSTestInternal();
        await c.getSomething();
    }
}
class AWSTestInternal {
    async getSomething() {
        throw new Error("");
        const client = new client_s3_1.S3Client({
            apiVersion: "2006-03-01",
            region: "",
            credentials: {
                accessKeyId: "",
                secretAccessKey: ""
            }
        });
        const getObjectCommand = new client_s3_1.GetObjectCommand({
            Bucket: "",
            Key: "" // Put an invalid key here
        });
        await client.send(getObjectCommand);
    }
}
const doWork = async () => {
    const aws = new AWSTest();
    await aws.run();
};
doWork().then((x) => {
    console.log("All Done!");
}).catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map
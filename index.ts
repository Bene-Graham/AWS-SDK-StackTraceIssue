import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

class AWSTest {
    public async run() {
        const c = new AWSTestInternal();
        await c.getSomething();
    }
}

class AWSTestInternal {
    public async getSomething() {
        const client = new S3Client({
            apiVersion: "2006-03-01",
            region: "",
            credentials: {
                accessKeyId: "",
                secretAccessKey: ""
            }
        });

        const getObjectCommand = new GetObjectCommand({
            Bucket: "",
            Key: "" // Put an invalid key here
        })

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
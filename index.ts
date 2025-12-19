
import * as aws from "@pulumi/aws";

const bucket = new aws.s3.Bucket("widget-iac", {
    bucket: "widget-iac",
    tags: {
        IAC: "true"
    }
})

export const bucketName = bucket.id;
export const bucketInfo = bucket.bucket;
export const bucketArn = bucket.arn;

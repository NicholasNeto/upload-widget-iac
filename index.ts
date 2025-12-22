import * as aws from "@pulumi/aws";

const firstBucket = new aws.s3.Bucket("widget-iac-s3-primeiro-bucket", {
    bucket: "widget-iac-s3-primeiro",
    tags: {
        IAC: "true",
    },
});

const secondBucket = new aws.s3.Bucket("widget-iac-s3-segundo-bucket", {
    bucket: "widget-iac-s3-segundo",
    tags: {
        IAC: "true",
    },
});

const ecr = new aws.ecr.Repository("widget-iac-ecr", {
    name: "widget-iac-ecr",
    imageTagMutability: 'IMMUTABLE',
    tags: {
        IAC: "true",
    }
});

export const firstBucketName = firstBucket.id;
export const firstBucketRegion = firstBucket.region;
export const firstBucketArn = firstBucket.arn;

export const secondBucketName = secondBucket.id;
export const secondBucketRegion = secondBucket.region;
export const secondBucketArn = secondBucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
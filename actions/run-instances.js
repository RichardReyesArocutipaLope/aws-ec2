import { fileURLToPath } from "url";
import { RunInstancesCommand } from "@aws-sdk/client-ec2";
import { client } from "../libs/client.js";

export const main = async () => {
  const command = new RunInstancesCommand({
    KeyName: "richard-dev",
    SecurityGroupIds: ["sg-0ae29743b68332472"],
    ImageId: "ami-09301a37d119fe4c5",
    InstanceType: "t2.micro",
    MinCount: 1,
    MaxCount: 1,

    TagSpecifications: [
      {
        ResourceType: "instance",
        Tags: [
          {
            Key: "Name",
            Value: "esis",
          },
        ],
      },
    ],
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

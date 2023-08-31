import { fileURLToPath } from "url";
import { DescribeImagesCommand } from "@aws-sdk/client-ec2";
import { client } from "../libs/client.js";

export const main = async () => {
  try {
    const input = {
      ImageIds: [
        "ami-09301a37d119fe4c5",
        "ami-010394ab667fbb251",
        "ami-065b889ab5c33720e",
        "ami-0b45099cfda802d86",
        "ami-0eaa5dc91b7f6a340",
        "ami-022248de413e8cf73",
      ],
    };
    const command = new DescribeImagesCommand(input);
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

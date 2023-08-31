import { fileURLToPath } from "url";
import { CreateSecurityGroupCommand } from "@aws-sdk/client-ec2";
import { client } from "../libs/client.js";

export const main = async () => {
  const command = new CreateSecurityGroupCommand({
    GroupName: "richard-group",
    Description: "richard-group",
  });

  try {
    const { GroupId } = await client.send(command);
    console.log(GroupId);
  } catch (err) {
    console.error(err);
  }
};
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

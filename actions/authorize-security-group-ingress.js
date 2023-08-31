import { fileURLToPath } from "url";
import { AuthorizeSecurityGroupIngressCommand } from "@aws-sdk/client-ec2";

import { client } from "../libs/client.js";
export const main = async () => {
  const command = new AuthorizeSecurityGroupIngressCommand({
    GroupId: "sg-0ae29743b68332472",
    IpPermissions: [
      {
        IpProtocol: "tcp",
        FromPort: 3389,
        ToPort: 3389,
        IpRanges: [{ CidrIp: "0.0.0.0/0" }],
      },
    ],
  });

  try {
    const { SecurityGroupRules } = await client.send(command);
    console.log(JSON.stringify(SecurityGroupRules, null, 2));
  } catch (err) {
    console.error(err);
  }
};
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

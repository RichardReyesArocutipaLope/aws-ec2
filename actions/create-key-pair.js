import { fileURLToPath } from "url";
import { CreateKeyPairCommand } from "@aws-sdk/client-ec2";
import { client } from "../libs/client.js";

export const main = async () => {
  try {
    const { KeyMaterial, KeyName } = await client.send(
      new CreateKeyPairCommand({ KeyName: "richard-dev" })
    );
    console.log(KeyName);
    console.log(KeyMaterial);
  } catch (err) {
    console.error(err);
  }
};
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

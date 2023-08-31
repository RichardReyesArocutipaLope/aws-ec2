/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { fileURLToPath } from "url";

// snippet-start:[javascript.v3.ec2.actions.DescribeImages]
import { paginateDescribeImages } from "@aws-sdk/client-ec2";

import { client } from "../libs/client.js";

// List at least the first i386 image available for EC2 instances.
export const main = async () => {
  // The paginate function is a wrapper around the base command.
  const paginator = paginateDescribeImages(
    { client, pageSize: 25 },
    {
      Filters: [
        { Name: "state", Values: ["available"] },
        { Name: "is-public", Values: ["true"] },
      ],
    },
    { ImageIds: ["ami-0e4e4616758377319"] }
  );

  // Windows
  // Linux/UNIX
  try {
    const arm64Images = [];
    for await (const page of paginator) {
      for (const image of page.Images) {
        console.log("Image ID:", image);
      }
    }
    console.log(arm64Images);
  } catch (err) {
    console.error(err);
  }
};
// snippet-end:[javascript.v3.ec2.actions.DescribeImages]

// Invoke main function if this file was run directly.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

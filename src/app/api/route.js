import jwt from "jsonwebtoken";
import fetch from "node-fetch";
import { NextResponse } from "next/server";

// base URL of your Retool instance + https://
const retoolURL = "";
// key you generate in Settings > API in Retool
const secret_key = "";

export async function POST() {
  //   const { retoolAppName, userJwt } = req.body;
  //   the app_uuid is the UUID of the app you want to embed
  const app_uuid = "";
  //   const { token, first_name, last_name, email } = jwt.decode(
  //     userJwt,
  //     secret_key
  //   );

  const headers = {
    // The RETOOL_API_KEY is the token generated in the first step
    Authorization: `Bearer ${secret_key}`,
    "Content-type": "application/json",
  };

  // all parameters can be found here: https://docs.retool.com/docs/retool-embed-quickstart#post-request-parameters
  const body = {
    landingPageUuid: app_uuid,
    // IDs of the groups you want the user to belong to - array of IDs
    groupIds: [1],
    // external identifier - typically email address
    externalIdentifier: "",
    userInfo: {
      firstName: "",
      lastName: "",
      email: "",
    },
    metadata: {
      msg: "Custom message",
    },
  };

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  };
  try {
    const res = await fetch(
      `${retoolURL}/api/embed-url/external-user`,
      options
    );
    const data = await res.json();
    console.log({ data });
    return NextResponse.json(data.embedUrl);
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error });
  }
}

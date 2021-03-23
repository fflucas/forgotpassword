import * as aws from "aws-sdk";

const transporterTypes = {
  stream: {
    jsonTransport: true,
  },
  ses: {
    SES: new aws.SES({ region: process.env.AWS_DEFAULT_REGION }),
  },
};

export default transporterTypes[process.env.MAIL_TRANSPORTER_TYPE];

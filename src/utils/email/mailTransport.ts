import * as nodemailer from "nodemailer";
import * as fs from "fs";
import * as handlebars from "handlebars";
import { join } from "path";
import mailConfig from "../../config/mail";
import AppError from "../error";

const transporter = nodemailer.createTransport(mailConfig);

interface IPayload {
  name: string;
  link?: string;
}

function sendMail(
  to: string,
  subject: string,
  payload: IPayload,
  template: string
): void {
  // load the template
  const source = fs.readFileSync(join(__dirname, template), "utf8");
  const compiledTemplate = handlebars.compile(source);

  // config the mail options
  const mailOptions = {
    from: process.env.MAIL_SENDER,
    to,
    subject,
    html: compiledTemplate(payload),
  } as nodemailer.SendMailOptions;

  // send mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      throw new AppError(error.message, 400);
    }
  });
}

export default sendMail;

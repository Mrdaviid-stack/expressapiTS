import nodemailerConfig from '../../app/config/nodemailer';
import { MailDetails } from '../../typings/interface/index'

class MailService 
{

  static async sendMail(options: MailDetails) 
  {
    let transporter = nodemailerConfig;

    let mailDetails: MailDetails = 
    {
      from: options.from,
      to: options.to,
      cc: options.cc,
      bcc: options.bcc,
      subject: options.subject,
      text: options.text,
      html: options.html
    }
    
    const result = await transporter.sendMail(mailDetails)

    if (! result) 
    {
      console.log("errors")
    } 
    else 
    {
      console.log("Email sent")
    }
  }

}

export default MailService
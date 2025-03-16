
module.exports = {
  async afterCreate(event) {
    const { result } = event;

    const emailContent = {
      to: result.email,
      from: `AthletiFi Select <${process.env.SENDGRID_DEFAULT_EMAIL_FROM}>`,
      replyTo: process.env.SENDGRID_DEFAULT_EMAIL_REPLY_TO,
      subject: `Thank you for Signing Up ${result.playerFirstName} for AthletiFi Summer Select!`,
      text: `
Hello ${result.parentFirstName},

Thank you for registering ${result.playerFirstName} for AthletiFi Summer Select 2025! We're excited to have you join our championship-winning program for another incredible summer of soccer development.

📍 Training Location:
Arcadia University, Jean Lenox West Field
450 South Easton Road, Glenside, PA 19038

⚽️ Program Schedule:
Each week we will have two evening training sessions on Tuesdays and Thursdays, where we will focus on developing technical skills, tactical understanding, and game intelligence.

🗓️ Training Dates:
- Week 1: June 10 & 12
- Week 2: June 17 & 19
- Week 3: June 24 & 26
- (Break for Independence Day week)
- Week 4: July 8 & 10
- Week 5: July 15 & 17
- Week 6: July 22 & 24

⏰ Each session will run from 6:00 PM to 7:30 PM ET.

🏆 Competitive Opportunities:
Building on our incredible 2024 season - where every AthletiFi Select team earned championship honors - we're planning exciting tournament opportunities for Summer 2025. We'll share specific tournament details as they are confirmed.

📱 AthletiFi Player Cards & Dashboard:
Each player will receive their own AthletiFi player card with access to our digital platform for tracking progress and achievements throughout the summer.

💫 Next Steps:
The next step in securing ${result.playerFirstName}'s spot is to complete the registration payment. You'll receive a separate email shortly with your secure payment link. Once payment is completed, you'll be all set for an amazing summer of soccer!

Keep an eye on your inbox - we'll be sharing more updates about the program, tournaments, and other exciting details as we get closer to summer. We can't wait to see ${result.playerFirstName} on the field!

Cheers,

AthletiFi Select Team
www.athletifiselect.com

🙋 Questions? We're here to help! Contact us anytime at welcome@athletifiselect.com
      `,
      html: `
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title>
    </title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      #outlook a {
      padding: 0;
      }
      body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      }
      table,
      td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      }
      img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
      }
      p {
      display: block;
      margin: 13px 0;
      }
    </style>
    <!--[if mso]>
    <noscript>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    </noscript>
    <![endif]-->
    <!--[if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" type="text/css">
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);
    </style>
    <!--<![endif]-->
    <style type="text/css">
      @media only screen and (min-width:480px) {
      .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
      }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
      }
    </style>
    <style type="text/css">
      @media only screen and (max-width:480px) {
      table.mj-full-width-mobile {
      width: 100% !important;
      }
      td.mj-full-width-mobile {
      width: auto !important;
      }
      }
    </style>
    <style type="text/css">
      * {
      font-family: Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif !important;
      }
      h2 {
      font-weight: 700 !important;
      font-size: 20px;
      }
      ul {
      margin-bottom: 16px !important;
      }
      h3 {
      font-weight: 700 !important;
      }
      h4 {
      font-weight: 600 !important;
      margin-bottom: 0px !important;
      color: #11568c !important;
      font-size: 16px;
      }
      strong {
      color: #4F5660 !important;
      }
      div,
      li {
      color: #2E3338;
      }
      p,
      span {
      font-size: 14px;
      line-height: 20px;
      color: #4F5660 !important;
      }
      .no-style {
      font-size: unset;
      line-height: unset;
      color: unset !important;
      }
      .cta-button a {
      padding: 10px !important;
      font-size: 14px !important;
      display: block !important;
      /* Makes the button fully clickable, not just the text */
      }
      .download-button a {
      padding: 8px 24px !important;
      font-size: 14px !important;
      }
      .cta-button {
      margin: 24px 0px !important;
      }
      .help-text p {
      font-size: 12px;
      margin: 0;
      }
      .footer *:not(a) {
      color: #747F8D !important;
      }
      .round-border {
      overflow: hidden;
      border-radius: 8px;
      }
      .social-media div {
      text-align: center !important;
      }
      .social-media-col {
      width: 40px !important;
      }
    </style>
    <!-- prettier-ignore -->
  </head>
  <body style="word-spacing:normal;background-color:#F9F9F9;">
    <div style="background-color:#F9F9F9;">
      <!--[if mso | IE]>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:604;" width="604" >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
            <![endif]-->
            <div style="margin:0px auto;max-width:604px;">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                <tbody>
                  <tr>
                    <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                      <!--[if mso | IE]>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <![endif]-->
                        <style type="text/css">
                          html,
                          body,
                          * {
                          -webkit-text-size-adjust: none;
                          text-size-adjust: none;
                          }
                          a {
                          color: #1eb0f4;
                          text-decoration: none;
                          }
                          a:hover {
                          text-decoration: underline;
                          }
                        </style>
                        <!--[if mso | IE]>
                        <tr>
                          <td class="" width="604" >
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:604px;" width="604" bgcolor="transparent" >
                              <tr>
                                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                                  <![endif]-->
                                  <div style="background:transparent;background-color:transparent;margin:0px auto;max-width:604px;">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;background-color:transparent;width:100%;">
                                      <tbody>
                                        <tr>
                                          <td style="direction:ltr;font-size:0px;padding:20px 0px;text-align:center;">
                                            <!--[if mso | IE]>
                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                              <tr>
                                                <td class="" style="vertical-align:top;width:604px;" >
                                                  <![endif]-->
                                                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tbody>
                                                        <tr>
                                                          <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                              <tbody>
                                                                <tr>
                                                                  <td style="width:140px;">
                                                                    <a href="https://www.athletifiselect.com" target="_blank">
                                                                    <img src="https://vidalco.in/uploads/athletifi_select_horizontal_logo_e5a1398639.png" style="border:0;display:block;outline:none;text-decoration:none;width:240px;font-size:13px;" />
                                                                    </a>
                                                                  </td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
                                                </td>
                                              </tr>
                                            </table>
                                            <![endif]-->
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!--[if mso | IE]>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <![endif]-->
                        <!--[if mso | IE]>
                        <tr>
                          <td class="shadow-outlook round-border-outlook" width="604" >
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="shadow-outlook round-border-outlook" role="presentation" style="width:604px;" width="604" bgcolor="#ffffff" >
                              <tr>
                                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                                  <![endif]-->
                                  <div class="shadow round-border" style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:604px;">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
                                      <tbody>
                                        <tr>
                                          <td style="direction:ltr;font-size:0px;padding:40px 50px;text-align:center;">
                                            <!--[if mso | IE]>
                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                              <tr>
                                                <td class="" style="vertical-align:top;width:504px;" >
                                                  <![endif]-->
                                                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tbody>
                                                        <tr>
                                                          <td align="center" style="padding:10px 0;">
                                                            <img src="https://vidalco.in/uploads/summer_select_25_banner_7152d4a9b3.jpg" style="width:100%; height:auto;">
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                                            <div style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:16px;line-height:24px;text-align:left;color:#737F8D;">
                                                              <p>Hello ${result.parentFirstName},</p>
                                                              <p>Thank you for registering ${result.playerFirstName} for AthletiFi Summer Select 2025! We're excited to have you join our championship-winning program for another incredible summer of soccer development.</p>
                                                              <h4>📍 Training Location:</h4>
                                                              <p>Arcadia University, Jean Lenox West Field<br> 450 South Easton Road, Glenside, PA 19038</p>
                                                              <h4>🗓️ Training Schedule:</h4>
                                                              <ul>
                                                                <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600; list-style-type: none;"><span style="font-weight: 400;"><strong>⚽ June 2025</strong></span></li>
                                                                <ul>
                                                                  <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Tuesday, June 10</li>
                                                                  <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Thursday, June 12</li>
                                                                  <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Tuesday, June 17</li>
                                                                  <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Thursday, June 19</li>
                                                                  <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Tuesday, June 24</li>
                                                                  <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Thursday, June 26</li>
                                                                </ul>
                                                                <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600; list-style-type: none;"><span style="font-weight: 400;"><strong>⚽ July 2025 </strong>(No sessions July 1 & 3 for Independence Day week)</span></li>
                                                                <ul>
                                                                  <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Tuesday, July 8</li>
                                                                  <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Thursday, July 10</li>
                                                                  <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Tuesday, July 15</li>
                                                                  <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Thursday, July 17</li>
                                                                  <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Tuesday, July 22</li>
                                                                  <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Thursday, July 24</li>
                                                                </ul>
                                                              </ul>
                                                              <p><strong>⏰&nbsp;Time:</strong><br>
                                                                <span style="font-weight: 400;">Each session will run from 6:00 PM to 7:30 PM ET.</span>
                                                              </p>
                                                              <h4>🏆&nbsp;Tournament Schedule:</h4>
                                                              <ul>
                                                                <li
                                                                  style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                  <span style="font-weight: 400;"><a href="https://www.hersheysoccer.org/summerclassic"
                                                                    style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;">Hershey
                                                                  Summer Classic:</a> June 14-15</span>
                                                                </li>
                                                                <li
                                                                  style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                  <span style="font-weight: 400;"><a href="https://www.edpsoccer.com/summer-sizzler"
                                                                    style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;">EDP Summer
                                                                  Sizzler:</a> July 26-27</span>
                                                                </li>
                                                              </ul>
                                                              <h4>💫 Next Steps:</h4>
                                                              <p>The next step in securing ${result.playerFirstName}'s spot is to complete the registration payment. You'll receive a separate email shortly with your secure payment link. Once payment is completed, you'll be all set for an amazing summer of soccer!</p>
                                                              <p>Keep an eye on your inbox - we'll be sharing more updates about the program, tournaments, and other exciting details as we get closer to summer. We can't wait to see ${result.playerFirstName} on the field!</p>
                                                              <p>Best regards,<br> AthletiFi Select Team<br>
                                                                <a href="https://www.athletifiselect.com" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;">www.athletifiselect.com</a>
                                                              </p>
                                                            </div>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="center" style="font-size:0px;padding:10px 0;word-break:break-word;">
                                                            <p style="border-top:solid 1px #DCDDDE;font-size:1px;margin:0px auto;width:100%;">
                                                            </p>
                                                            <!--[if mso | IE]>
                                                            <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #DCDDDE;font-size:1px;margin:0px auto;width:504px;" role="presentation" width="504px" >
                                                              <tr>
                                                                <td style="height:0;line-height:0;"> &nbsp;</td>
                                                              </tr>
                                                            </table>
                                                            <![endif]-->
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td style="font-size:0px;padding:120;word-break:break-word;">
                                                            <!--[if mso | IE]>
                                                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:504px;" width="504" >
                                                              <tr>
                                                                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                                                                  <![endif]-->
                                                                  <div style="margin:0px auto;max-width:504px;">
                                                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                                                      <tbody>
                                                                        <tr>
                                                                          <td style="direction:ltr;font-size:0px;padding:120;text-align:center;">
                                                                            <!--[if mso | IE]>
                                                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                                              <tr>
                                                                                <td align="left" class="help-text-outlook" style="" >
                                                                                  <![endif]-->
                                                                                  <div style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:1;text-align:left;color:#747F8D;">
                                                                                  <p>🙋 Questions? We're here to help! Contact us anytime at <a href="mailto:welcome@athletifiselect.com" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;">welcome@athletifiselect.com</a></p>
                                                                                  </div>
                                                                                  <!--[if mso | IE]>
                                                                                </td>
                                                                              </tr>
                                                                            </table>
                                                                            <![endif]-->
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                  </div>
                                                                  <!--[if mso | IE]>
                                                                </td>
                                                              </tr>
                                                            </table>
                                                            <![endif]-->
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
                                                </td>
                                              </tr>
                                            </table>
                                            <![endif]-->
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!--[if mso | IE]>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <![endif]-->
                        <!--[if mso | IE]>
                        <tr>
                          <td class="footer-outlook" width="604" >
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="footer-outlook" role="presentation" style="width:604px;" width="604" bgcolor="transparent" >
                              <tr>
                                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                                  <![endif]-->
                                  <div class="footer" style="background:transparent;background-color:transparent;margin:0px auto;max-width:604px;">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;background-color:transparent;width:100%;">
                                      <tbody>
                                        <tr>
                                          <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;text-align:center;">
                                            <!--[if mso | IE]>
                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                              <tr>
                                                <td class="" style="vertical-align:top;width:604px;" >
                                                  <![endif]-->
                                                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tbody>
                                                        <tr>
                                                          <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                                            <div style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:24px;text-align:center;color:#99AAB5;">
                                                              Sent by AthletiFi &bull;
                                                              <a href="https://www.athleti.fi/news?page=1" style="color: #0092c4; text-decoration: none">Check Our
                                                              Blog</a> &bull; <a href="https://www.instagram.com/athletifi/" style="color: #0092c4; text-decoration: none">@athletifi</a>
                                                            </div>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                                            <div style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:24px;text-align:center;color:#99AAB5;">
                                                              326 Penn Ave, West Reading, PA 19611
                                                            </div>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                                                            <div style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                                                            </div>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
                                                </td>
                                              </tr>
                                            </table>
                                            <![endif]-->
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!--[if mso | IE]>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
    </div>
  </body>
</html>
`,
  };
  try {
    await strapi.plugins["email"].services.email.send(emailContent);
    console.log(`${result.parentFirstName} just registered! Email confirmation sent to ${result.email}`)
  } catch ({response}) {
    console.log(response.body);
  }
},

  async afterUpdate(event) {
    const { result, data } = event;
    console.log(result)
  // Check if the specific fields were updated
    if (result.stripePaymentLink && result.eligible && !result.stripePaid){
      const emailContent = {
        to: result.email,
        from: `AthletiFi Select <${process.env.SENDGRID_DEFAULT_EMAIL_FROM}>`,
        replyTo: process.env.SENDGRID_DEFAULT_EMAIL_REPLY_TO,
        subject: "AthletiFi Select: Complete Your Registration - Payment Link Inside",
        text: `
        Hello ${result.parentFirstName},

        Thank you for registering ${result.playerFirstName} for AthletiFi Summer Select 2025! Here's your secure payment link to complete the registration for AthletiFi Summer Select 2025:

        🌐 Secure payment link: ${result.stripePaymentLink}

        If you have any questions, please email us at welcome@athletifiselect.com.

        Looking forward to another amazing summer of soccer!

        Cheers,

        AthletiFi Select Team
        www.athletifiselect.com
        `,
        html: `
        <!doctype html>
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
          xmlns:o="urn:schemas-microsoft-com:office:office">
          <head>
            <title>
            </title>
            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <!--<![endif]-->
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style type="text/css">
              #outlook a {
              padding: 0;
              }
              body {
              margin: 0;
              padding: 0;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
              }
              table,
              td {
              border-collapse: collapse;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              }
              img {
              border: 0;
              height: auto;
              line-height: 100%;
              outline: none;
              text-decoration: none;
              -ms-interpolation-mode: bicubic;
              }
              p {
              display: block;
              margin: 13px 0;
              }
            </style>
            <!--[if mso]>
            <noscript>
              <xml>
                <o:OfficeDocumentSettings>
                  <o:AllowPNG/>
                  <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
              </xml>
            </noscript>
            <![endif]-->
            <!--[if lte mso 11]>
            <style type="text/css">
              .mj-outlook-group-fix { width:100% !important; }
            </style>
            <![endif]-->
            <!--[if !mso]><!-->
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet" type="text/css">
            <style type="text/css">
              @import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);
            </style>
            <!--<![endif]-->
            <style type="text/css">
              @media only screen and (min-width:480px) {
              .mj-column-per-100 {
              width: 100% !important;
              max-width: 100%;
              }
              }
            </style>
            <style media="screen and (min-width:480px)">
              .moz-text-html .mj-column-per-100 {
              width: 100% !important;
              max-width: 100%;
              }
            </style>
            <style type="text/css">
              @media only screen and (max-width:480px) {
              table.mj-full-width-mobile {
              width: 100% !important;
              }
              td.mj-full-width-mobile {
              width: auto !important;
              }
              }
            </style>
            <style type="text/css">
              * {
              font-family: Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif !important;
              }
              h2 {
              font-weight: 700 !important;
              font-size: 20px;
              }
              ul {
              margin-bottom: 16px !important;
              }
              h3 {
              font-weight: 700 !important;
              }
              h4 {
              font-weight: 600 !important;
              margin-bottom: 0px !important;
              color: #11568c !important;
              font-size: 16px;
              }
              strong {
              color: #4F5660 !important;
              }
              div,
              li {
              color: #2E3338;
              }
              p,
              span {
              font-size: 14px;
              line-height: 20px;
              color: #4F5660 !important;
              }
              .no-style {
              font-size: unset;
              line-height: unset;
              color: unset !important;
              }
              .cta-button a {
              padding: 10px !important;
              font-size: 14px !important;
              display: block !important;
              /* Makes the button fully clickable, not just the text */
              }
              .download-button a {
              padding: 8px 24px !important;
              font-size: 14px !important;
              }
              .cta-button {
              margin: 24px 0px !important;
              }
              .help-text p {
              font-size: 12px;
              margin: 0;
              }
              .footer *:not(a) {
              color: #747F8D !important;
              }
              .round-border {
              overflow: hidden;
              border-radius: 8px;
              }
              .social-media div {
              text-align: center !important;
              }
              .social-media-col {
              width: 40px !important;
              }
            </style>
            <!-- prettier-ignore -->
          </head>
          <body style="word-spacing:normal;background-color:#F9F9F9;">
            <div style="background-color:#F9F9F9;">
              <!--[if mso | IE]>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:604;" width="604" >
                <tr>
                  <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                    <![endif]-->
                    <div style="margin:0px auto;max-width:604;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                        <tbody>
                          <tr>
                            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                              <!--[if mso | IE]>
                              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                <![endif]-->
                                <style type="text/css">
                                  html,
                                  body,
                                  * {
                                  -webkit-text-size-adjust: none;
                                  text-size-adjust: none;
                                  }
                                  a {
                                  color: #1eb0f4;
                                  text-decoration: none;
                                  }
                                  a:hover {
                                  text-decoration: underline;
                                  }
                                </style>
                                <!--[if mso | IE]>
                                <tr>
                                  <td class="" width="604" >
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:604px;" width="604" bgcolor="transparent" >
                                      <tr>
                                        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                                          <![endif]-->
                                          <div style="background:transparent;background-color:transparent;margin:0px auto;max-width:604px;">
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                                              style="background:transparent;background-color:transparent;width:100%;">
                                              <tbody>
                                                <tr>
                                                  <td style="direction:ltr;font-size:0px;padding:20px 0px;text-align:center;">
                                                    <!--[if mso | IE]>
                                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                      <tr>
                                                        <td class="" style="vertical-align:top;width:604px;" >
                                                          <![endif]-->
                                                          <div class="mj-column-per-100 mj-outlook-group-fix"
                                                            style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                              style="vertical-align:top;" width="100%">
                                                              <tbody>
                                                                <tr>
                                                                  <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                                      style="border-collapse:collapse;border-spacing:0px;">
                                                                      <tbody>
                                                                        <tr>
                                                                          <td style="width:140px;">
                                                                            <a href="https://www.athletifiselect.com" target="_blank">
                                                                            <img 
                                                                              src="https://vidalco.in/uploads/athletifi_select_horizontal_logo_e5a1398639.png"
                                                                              style="border:0;display:block;outline:none;text-decoration:none;width:240px;font-size:13px;"
                                                                            />
                                                                            </a>
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                  </td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </div>
                                                          <!--[if mso | IE]>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                    <![endif]-->
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <!--[if mso | IE]>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <![endif]-->
                                <!--[if mso | IE]>
                                <tr>
                                  <td class="shadow-outlook round-border-outlook" width="604" >
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="shadow-outlook round-border-outlook" role="presentation" style="width:604px;" width="604" bgcolor="#ffffff" >
                                      <tr>
                                        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                                          <![endif]-->
                                          <div class="shadow round-border"
                                            style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:604px;">
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                                              style="background:#ffffff;background-color:#ffffff;width:100%;">
                                              <tbody>
                                                <tr>
                                                  <td style="direction:ltr;font-size:0px;padding:40px 50px;text-align:center;">
                                                    <!--[if mso | IE]>
                                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                      <tr>
                                                        <td class="" style="vertical-align:top;width:504px;" >
                                                          <![endif]-->
                                                          <div class="mj-column-per-100 mj-outlook-group-fix"
                                                            style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                              style="vertical-align:top;" width="100%">
                                                              <tbody>
                                                                <!-- TOP IMAGE -->
                                                                <tr>
                                                                  <td align="center" style="padding:10px 0;">
                                                                    <img src="https://vidalco.in/uploads/summer_select_25_banner_7152d4a9b3.jpg" style="width:100%; height:auto;">
                                                                  </td>
                                                                </tr>

                                                                <!-- TEXT BLOCKS BROKEN INTO MULTIPLE ROWS -->
                                                                <tr>
                                                                  <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                                                    <p>Hello ${result.parentFirstName},</p>
                                                                    <p>
                                                                      Thank you for registering ${result.playerFirstName} for AthletiFi Summer Select 2025! Here's your 
                                                                      secure payment link to complete the registration for AthletiFi Summer Select 2025:
                                                                    </p>
                                                                  </td>
                                                                </tr>

                                                                <!-- HORIZONTAL LINE ABOVE THE LINK -->
                                                                <tr>
                                                                  <td align="center" style="font-size:0px;padding:10px 0;word-break:break-word;">
                                                                    <p style="border-top:solid 1px #DCDDDE;font-size:1px;margin:0px auto;width:100%;">
                                                                    </p>
                                                                  </td>
                                                                </tr>

                                                                <!-- PAYMENT LINK -->
                                                                <tr>
                                                                  <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                                                      <p>🌐 Secure payment link: ${result.stripePaymentLink}</p>
                                                                  </td>
                                                                </tr>

                                                                <!-- HORIZONTAL LINE BELOW THE LINK -->
                                                                <tr>
                                                                  <td align="center" style="font-size:0px;padding:10px 0;word-break:break-word;">
                                                                    <p style="border-top:solid 1px #DCDDDE;font-size:1px;margin:0px auto;width:100%;">
                                                                    </p>
                                                                  </td>
                                                                </tr>

                                                                <!-- CONTINUATION OF MAIN MESSAGE -->
                                                                <tr>
                                                                  <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                                                    <p>
                                                                      If you have any questions, please email us at
                                                                      <a
                                                                        href="mailto:welcome@athletifiselect.com?subject=Question%20about%20AthletiFi%20Select"
                                                                        style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4"
                                                                      >welcome@athletifiselect.com</a>.
                                                                    </p>
                                                                    <p>
                                                                      Looking forward to another amazing summer of soccer!
                                                                    </p>
                                                                    <p>Team AthletiFi</p>
                                                                  </td>
                                                                </tr>
                                                                <tr>
                                                                  <td align="center" style="font-size:0px;padding:10px 0;word-break:break-word;">
                                                                    <p style="border-top:solid 1px #DCDDDE;font-size:1px;margin:0px auto;width:100%;">
                                                                    </p>
                                                                  </td>
                                                                </tr>
                                                                <!-- <tr>
                                                                  <td align="center" style="padding:10px 0;">
                                                                    <img src="https://vidalco.in/uploads/summer_select_25_banner_7152d4a9b3.jpg" style="width:100%; height:auto;">
                                                                  </td>
                                                                </tr>
                                                                -->
                                                                <tr>
                                                                  <td style="font-size:0px;padding:120;word-break:break-word;">
                                                                    <!--[if mso | IE]>
                                                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:504px;" width="504" >
                                                                      <tr>
                                                                        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                                                                    <![endif]-->
                                                                    <div style="margin:0px auto;max-width:504px;">
                                                                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                                                        <tbody>
                                                                          <tr>
                                                                            <td style="direction:ltr;font-size:0px;padding:120;text-align:center;">
                                                                              <!-- <div style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:1;text-align:left;color:#747F8D;">
                                                                                <p>
                                                                                  🙋 Questions? Please don't hesitate to
                                                                                  <a
                                                                                    href="mailto:welcome@athletifiselect.com?subject=Question%20about%20AthletiFi%20Select"
                                                                                    style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4"
                                                                                  >contact us</a
                                                                                  >. Your excitement and involvement make our program truly special, and we're here to ensure you
                                                                                  have all the information you need.
                                                                                </p>
                                                                              </div> -->
                                                                            </td>
                                                                          </tr>
                                                                        </tbody>
                                                                      </table>
                                                                    </div>
                                                                    <!--[if mso | IE]>
                                                                        </td>
                                                                      </tr>
                                                                    </table>
                                                                    <![endif]-->
                                                                  </td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </div>
                                                          <!--[if mso | IE]>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                    <![endif]-->
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <!--[if mso | IE]>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <![endif]-->
                                <!--[if mso | IE]>
                                <tr>
                                  <td class="footer-outlook" width="604" >
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="footer-outlook" role="presentation" style="width:604px;" width="604" bgcolor="transparent" >
                                      <tr>
                                        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                                          <![endif]-->
                                          <div class="footer" style="background:transparent;background-color:transparent;margin:0px auto;max-width:604px;">
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                                              style="background:transparent;background-color:transparent;width:100%;">
                                              <tbody>
                                                <tr>
                                                  <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;text-align:center;">
                                                    <!--[if mso | IE]>
                                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                      <tr>
                                                        <td class="" style="vertical-align:top;width:604px;" >
                                                          <![endif]-->
                                                          <div class="mj-column-per-100 mj-outlook-group-fix"
                                                            style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
                                                              width="100%">
                                                              <tbody>
                                                                <tr>
                                                                  <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                                                    <div
                                                                      style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:24px;text-align:center;color:#99AAB5;">
                                                                      Sent by AthletiFi &bull;
                                                                      <a href="https://www.athleti.fi/news?page=1" style="color: #0092c4; text-decoration: none">Check Our
                                                                      Blog</a>
                                                                      &bull; <a href="https://www.instagram.com/athletifi/"
                                                                        style="color: #0092c4; text-decoration: none">@athletifi</a>
                                                                    </div>
                                                                  </td>
                                                                </tr>
                                                                <tr>
                                                                  <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                                                    <div
                                                                      style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:24px;text-align:center;color:#99AAB5;">
                                                                      326 Penn Ave, West Reading, PA 19611
                                                                    </div>
                                                                  </td>
                                                                </tr>
                                                                <tr>
                                                                  <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                                                                    <div
                                                                      style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                                                                    </div>
                                                                  </td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </div>
                                                          <!--[if mso | IE]>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                    <![endif]-->
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <!--[if mso | IE]>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                              <![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!--[if mso | IE]>
                  </td>
                </tr>
              </table>
              <![endif]-->
            </div>
          </body>
        </html>
        `,
        };
  
        try {
          await strapi.plugins["email"].services.email.send(emailContent);
          console.log(`Time to pay up! Payment Link Email sent to ${result.email}`)
        } catch ({response}) {
          console.log(response.body);
        }
      }
    else if (result.stripePaymentLink && result.eligible && result.stripePaid){
      const emailContent = {
        to: result.email,
        from: `AthletiFi Select <${process.env.SENDGRID_DEFAULT_EMAIL_FROM}>`,
        replyTo: process.env.SENDGRID_DEFAULT_EMAIL_REPLY_TO,
        subject: "Thank you for your payment for AthletiFi Summer Select - You're All Set!",
        text: `
        Hello ${result.parentFirstName},

        Thank you for completing your payment! ${result.playerFirstName} is now officially enrolled in AthletiFi Summer Select 2025.

        As a reminder, here are the key details for the AthletiFi Summer Select program:

        🗓️ Training Schedule
        All sessions held at Arcadia University, Jean Lenox West Field, from 6:00-7:30 PM

        ⚽ June 2025
        • Tuesday, June 10
        • Thursday, June 12
        • Tuesday, June 17
        • Thursday, June 19
        • Tuesday, June 24
        • Thursday, June 26

        ⚽ July 2025 (No sessions July 1 & 3 for Independence Day week)
        • Tuesday, July 8
        • Thursday, July 10
        • Tuesday, July 15
        • Thursday, July 17
        • Tuesday, July 22
        • Thursday, July 24

        🏆 Tournament Schedule - Mark Your Calendars!
        • Hershey Summer Classic: June 14-15, 2025
        • EDP Summer Sizzler: July 26-27, 2025

        Please mark your calendars and stay tuned for final confirmations and any additional tournament opportunities.

        See you on the field this summer!

        The AthletiFi Select Team
        `,
        html: `
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title>
    </title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      #outlook a {
      padding: 0;
      }
      body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      }
      table,
      td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      }
      img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
      }
      p {
      display: block;
      margin: 13px 0;
      }
    </style>
    <!--[if mso]>
    <noscript>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    </noscript>
    <![endif]-->
    <!--[if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet" type="text/css">
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);
    </style>
    <!--<![endif]-->
    <style type="text/css">
      @media only screen and (min-width:480px) {
      .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
      }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
      }
    </style>
    <style type="text/css">
      @media only screen and (max-width:480px) {
      table.mj-full-width-mobile {
      width: 100% !important;
      }
      td.mj-full-width-mobile {
      width: auto !important;
      }
      }
    </style>
    <style type="text/css">
      * {
      font-family: Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif !important;
      }
      h2 {
      font-weight: 700 !important;
      font-size: 20px;
      }
      ul {
      margin-bottom: 16px !important;
      }
      h3 {
      font-weight: 700 !important;
      }
      h4 {
      font-weight: 600 !important;
      margin-bottom: 0px !important;
      color: #11568c !important;
      font-size: 16px;
      }
      strong {
      color: #4F5660 !important;
      }
      div,
      p,
      span,
      li {
      font-size: 14px;
      line-height: 20px;
      color: #4F5660 !important;
      }
      .no-style {
      font-size: unset;
      line-height: unset;
      color: unset !important;
      }
      .cta-button a {
      padding: 10px !important;
      font-size: 14px !important;
      display: block !important;
      /* Makes the button fully clickable, not just the text */
      }
      .download-button a {
      padding: 8px 24px !important;
      font-size: 14px !important;
      }
      .cta-button {
      margin: 24px 0px !important;
      }
      .help-text p {
      font-size: 12px;
      margin: 0;
      }
      .footer *:not(a) {
      color: #747F8D !important;
      }
      .round-border {
      overflow: hidden;
      border-radius: 8px;
      }
      .social-media div {
      text-align: center !important;
      }
      .social-media-col {
      width: 40px !important;
      }
    </style>
    <!-- prettier-ignore -->
  </head>
  <body style="word-spacing:normal;background-color:#F9F9F9;">
    <div style="background-color:#F9F9F9;">
      <!--[if mso | IE]>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:604;" width="604" >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
            <![endif]-->
            <div style="margin:0px auto;max-width:604;">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                <tbody>
                  <tr>
                    <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                      <!--[if mso | IE]>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <![endif]-->
                        <style type="text/css">
                          html,
                          body,
                          * {
                          -webkit-text-size-adjust: none;
                          text-size-adjust: none;
                          }
                          a {
                          color: #1eb0f4;
                          text-decoration: none;
                          }
                          a:hover {
                          text-decoration: underline;
                          }
                        </style>
                        <!--[if mso | IE]>
                        <tr>
                          <td class="" width="604" >
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:604px;" width="604" bgcolor="transparent" >
                              <tr>
                                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                                  <![endif]-->
                                  <div style="background:transparent;background-color:transparent;margin:0px auto;max-width:604px;">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                                      style="background:transparent;background-color:transparent;width:100%;">
                                      <tbody>
                                        <tr>
                                          <td style="direction:ltr;font-size:0px;padding:20px 0px;text-align:center;">
                                            <!--[if mso | IE]>
                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                              <tr>
                                                <td class="" style="vertical-align:top;width:604px;" >
                                                  <![endif]-->
                                                  <div class="mj-column-per-100 mj-outlook-group-fix"
                                                    style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                      style="vertical-align:top;" width="100%">
                                                      <tbody>
                                                        <tr>
                                                          <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                              style="border-collapse:collapse;border-spacing:0px;">
                                                              <tbody>
                                                                <tr>
                                                                  <td style="width:140px;">
                                                                    <a href="https://www.athletifiselect.com" target="_blank">
                                                                    <img 
                                                                      src="https://vidalco.in/uploads/athletifi_select_horizontal_logo_e5a1398639.png"
                                                                      style="border:0;display:block;outline:none;text-decoration:none;width:240px;font-size:13px;"
                                                                    />
                                                                    </a>
                                                                  </td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
                                                </td>
                                              </tr>
                                            </table>
                                            <![endif]-->
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!--[if mso | IE]>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <![endif]-->
                        <!--[if mso | IE]>
                        <tr>
                          <td class="shadow-outlook round-border-outlook" width="604" >
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="shadow-outlook round-border-outlook" role="presentation" style="width:604px;" width="604" bgcolor="#ffffff" >
                              <tr>
                                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                                  <![endif]-->
                                  <div class="shadow round-border"
                                    style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:604px;">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                                      style="background:#ffffff;background-color:#ffffff;width:100%;">
                                      <tbody>
                                        <tr>
                                          <td style="direction:ltr;font-size:0px;padding:40px 50px;text-align:center;">
                                            <!--[if mso | IE]>
                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                              <tr>
                                                <td class="" style="vertical-align:top;width:504px;" >
                                                  <![endif]-->
                                                  <div class="mj-column-per-100 mj-outlook-group-fix"
                                                    style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                      style="vertical-align:top;" width="100%">
                                                      <tbody>
                                                        <tr>
                                                          <td align="center" style="padding:10px 0;">
                                                            <img src="https://vidalco.in/uploads/summer_select_25_banner_7152d4a9b3.jpg" style="width:100%; height:auto;">
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                                            <p>Hello ${result.parentFirstName},</p>
                                                            <p>
                                                              Thank you for completing your payment! ${result.playerFirstName} is now officially enrolled in AthletiFi Summer Select 2025.
                                                            </p>
                                                            <p>
                                                              As a reminder, here are the key details for the AthletiFi Summer Select program:
                                                            </p>
                                                            <p><strong>🗓️&nbsp;Training Schedule:</strong></p>
                                                            <ul>
                                                              <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600; list-style-type: none;"><span style="font-weight: 400;"><strong>⚽ June 2025</strong></span></li>
                                                              <ul>
                                                                <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Tuesday, June 10</li>
                                                                <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Thursday, June 12</li>
                                                                <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Tuesday, June 17</li>
                                                                <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Thursday, June 19</li>
                                                                <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Tuesday, June 24</li>
                                                                <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Thursday, June 26</li>
                                                              </ul>
                                                              <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600; list-style-type: none;"><span style="font-weight: 400;"><strong>⚽ July 2025 </strong>(No sessions July 1 & 3 for Independence Day week)</span></li>
                                                              <ul>
                                                                <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Tuesday, July 8</li>
                                                                <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Thursday, July 10</li>
                                                                <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Tuesday, July 15</li>
                                                                <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Thursday, July 17</li>
                                                                <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Tuesday, July 22</li>
                                                                <li style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 14px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 20px;">Thursday, July 24</li>
                                                              </ul>
                                                            </ul>
                                                            <p>
                                                            <p><strong>📍&nbsp;Location: </strong>Arcadia University, Jean Lenox West Field (450 South Easton Road, Glenside, PA 19038)</p>
                                                            <p><strong>⏰&nbsp;Time: </strong>Each session will be from 6:00 to 7:30 p.m.</p>
                                                            <p><strong>🏆&nbsp;Tournament Schedule:</strong></p>
                                                            <ul>
                                                              <li
                                                                style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                <span style="font-weight: 400;"><a href="https://www.hersheysoccer.org/summerclassic"
                                                                  style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;">Hershey
                                                                Summer Classic:</a> June 14-15</span>
                                                              </li>
                                                              <li
                                                                style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                <span style="font-weight: 400;"><a href="https://www.edpsoccer.com/summer-sizzler"
                                                                  style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;">EDP Summer
                                                                Sizzler:</a> July 26-27</span>
                                                              </li>
                                                            </ul>
                                                            <p>
                                                              See you on the field this summer!
                                                            </p>
                                                            <p>Team AthletiFi</p>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="center" style="font-size:0px;padding:10px 0;word-break:break-word;">
                                                            <p style="border-top:solid 1px #DCDDDE;font-size:1px;margin:0px auto;width:100%;">
                                                            </p>
                                                            <!--[if mso | IE]>
                                                            <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #DCDDDE;font-size:1px;margin:0px auto;width:504px;" role="presentation" width="504px" >
                                                              <tr>
                                                                <td style="height:0;line-height:0;"> &nbsp;</td>
                                                              </tr>
                                                            </table>
                                                            <![endif]-->
                                                          </td>
                                                        </tr>
                                                        <!-- <tr>
                                                          <td align="center" style="padding:10px 0;">
                                                            <img src="https://vidalco.in/uploads/Athleti_Fi_Select_Banner_410b9abacf.jpg" style="width:100%; height:auto;">
                                                          </td>
                                                        </tr>
                                                        -->
                                                        <tr>
                                                          <td style="font-size:0px;padding:120;word-break:break-word;">
                                                            <!--[if mso | IE]>
                                                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:504px;" width="504" >
                                                              <tr>
                                                                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                                                                  <![endif]-->
                                                                  <div style="margin:0px auto;max-width:504px;">
                                                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                                                      <tbody>
                                                                        <tr>
                                                                          <td style="direction:ltr;font-size:0px;padding:120;text-align:center;">
                                                                            <!--[if mso | IE]>
                                                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                                              <tr>
                                                                                <td align="left" class="help-text-outlook" style="" >
                                                                                  <![endif]-->
                                                                                  <div
                                                                                    style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:1;text-align:left;color:#747F8D;">
                                                                                    <p>🙋 Questions? Please don't hesitate to <a href="mailto:welcome@athletifiselect.com?subject=Question%20about%20AthletiFi%20Select" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4">contact us</a>. Your excitement and involvement make our program truly special, and we're here to ensure you have all the information you need.</p>
                                                                                  </div>
                                                                                  <!--[if mso | IE]>
                                                                                </td>
                                                                              </tr>
                                                                            </table>
                                                                            <![endif]-->
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                  </div>
                                                                  <!--[if mso | IE]>
                                                                </td>
                                                              </tr>
                                                            </table>
                                                            <![endif]-->
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
                                                </td>
                                              </tr>
                                            </table>
                                            <![endif]-->
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!--[if mso | IE]>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <![endif]-->
                        <!--[if mso | IE]>
                        <tr>
                          <td class="footer-outlook" width="604" >
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="footer-outlook" role="presentation" style="width:604px;" width="604" bgcolor="transparent" >
                              <tr>
                                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                                  <![endif]-->
                                  <div class="footer" style="background:transparent;background-color:transparent;margin:0px auto;max-width:604px;">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                                      style="background:transparent;background-color:transparent;width:100%;">
                                      <tbody>
                                        <tr>
                                          <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;text-align:center;">
                                            <!--[if mso | IE]>
                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                              <tr>
                                                <td class="" style="vertical-align:top;width:604px;" >
                                                  <![endif]-->
                                                  <div class="mj-column-per-100 mj-outlook-group-fix"
                                                    style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
                                                      width="100%">
                                                      <tbody>
                                                        <tr>
                                                          <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                                            <div
                                                              style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:24px;text-align:center;color:#99AAB5;">
                                                              Sent by AthletiFi &bull;
                                                              <a href="https://www.athleti.fi/news?page=1" style="color: #0092c4; text-decoration: none">Check Our
                                                              Blog</a>
                                                              &bull; <a href="https://www.instagram.com/athletifi/"
                                                                style="color: #0092c4; text-decoration: none">@athletifi</a>
                                                            </div>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                                            <div
                                                              style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:24px;text-align:center;color:#99AAB5;">
                                                              326 Penn Ave, West Reading, PA 19611
                                                            </div>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                                                            <div
                                                              style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                                                            </div>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
                                                </td>
                                              </tr>
                                            </table>
                                            <![endif]-->
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!--[if mso | IE]>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
    </div>
  </body>
</html>
        `,
        };
  
        try {
          await strapi.plugins["email"].services.email.send(emailContent);
          console.log(`Payment Complete! Confirmation Email sent to ${result.email}`)
        } catch ({response}) {
          console.log(response.body);
        }
      }
    },
};

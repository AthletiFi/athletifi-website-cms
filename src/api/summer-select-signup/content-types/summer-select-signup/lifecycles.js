
module.exports = {
  async afterCreate(event) {
    const { result } = event;

    const emailContent = {
      to: result.email,
      from: `AthletiFi Select <${process.env.SENDGRID_DEFAULT_EMAIL_FROM}>`,
      replyTo: process.env.SENDGRID_DEFAULT_EMAIL_REPLY_TO,
      subject: `Thank you for Signing Up ${result.playerFirstName} for AthletiFi Winter Select 2024!`,
      text: `
Hello ${result.parentFirstName},

We are thrilled for your interest in signing up ${result.playerFirstName} for AthletiFi Winter Select! Thank you for taking the first step towards an incredible winter of soccer.
Here's what you can look forward to:

📍 Training Location:
All training sessions will be held at Arcadia University, at the Jean Lenox West Field. Here are the details:
Field: Arcadia University, Jean Lenox West Field
Address: 450 South Easton Road, Glenside, PA 19038

Program Schedule:
🗓️ Dates: November 13, 2024 to first week of January 2025
⏰ Time: Each session will run from 6:00 PM to 7:30 PM ET on Wednesdays
Note: The session in the first week of January will be on Thursday, January 2nd, 2025.

⚽️ Meet Your Coaches:
This year we have an outstanding coaching team. Who will your coaches be? Read more about Brian Blasy, Darren John and Ashley "AJ" Johnson, via the coaches page on the AthletiFi website.

🏆 YSC League Participation:
- Seven-game schedule plus playoffs (scheduled for January 4, 2025)
- Game Location: YSC Sports, Wayne, PA
- Game Days: Vary by age group and gender (see schedule below)
- Game Duration: 40 minutes (6 field players + 1 goalkeeper)

Game Schedule at YSC:
- Boys U8-U11: Saturdays
- Boys U12-U13: Fridays
- Boys U14 and above: Saturdays
- Girls U8-U10: Mondays
- Girls U11: Tuesdays
- Girls U12-U13: Fridays
- Girls U14 and above: Sundays

💸 Next Step - Registration Payment:
The next step in securing ${result.playerFirstName}'s spot is to complete the registration payment of $400. We will send a separate email shortly with a unique payment link for you to complete this process securely.

💬 Stay Tuned:
We're just as excited as you are for the winter ahead! Keep an eye on your inbox for our follow-up email containing the payment link and any additional information you might need.
Thank you for choosing the AthletiFi Winter Select Program for your soccer journey in 2024-2025. Let's make it a season to remember!

Thank you,

AthletiFi Select Team
www.athletifiselect.com

🙋 Questions? Please don't hesitate to contact us at welcome@athletifiselect.com. Your excitement and involvement make our program truly special, and we're here to ensure you have all the information you need.
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
                                                                          <img height="38"
                                                                            src="https://vidalco.in/uploads/Athleti_Fi_Select_Logo_small_3529534c6b.png"
                                                                            style="border:0;display:block;outline:none;text-decoration:none;height:100%;width:100%;font-size:13px;"
                                                                            width="140" />
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
                                                                <img src="https://vidalco.in/uploads/New_poster_bg_copy3423_2c6ba4817c.jpg" style="width:100%; height:auto;">
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                                                <div
                                                                  style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:16px;line-height:24px;text-align:left;color:#737F8D;">
                                                                  <p>Hello ${result.parentFirstName},</p>
                                                                  <span style="font-weight: 400;"> We are thrilled for your interest in signing up ${result.playerFirstName} for 
                                                                      href="https://www.athletifiselect.com"
                                                                      style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;"> AthletiFi Winter Select</a>! Thank you for taking the first step towards an incredible winter of soccer.</span>
                                                                  <p>
                                                                  </p>
                                                                  <p>Here's what you can look forward to:
                                                                  </p>
                                                                  <p>
                                                                  <h4>📍&nbsp;Training Location:</h4>
                                                                  <span style="font-weight: 400;">All training sessions will be held at&nbsp;Arcadia
                                                                    University, at the <a
                                                                      href="https://arcadiaknights.com/sports/2019/1/23/facility-page-draft%202.aspx"
                                                                      style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;">Jean
                                                                    Lenox West Field</a>. Here are the details:</span>
                                                                </div>
                                                                <ul>
                                                                  <li
                                                                    style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                    <span style="font-weight: 400;"><strong>Field:</strong> Arcadia University, Jean
                                                                    Lenox West Field</span>
                                                                  </li>
                                                                  <li
                                                                    style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                    <span style="font-weight: 400;"><strong>Address: </strong>450 South Easton Road,
                                                                    Glenside, PA 19038</span>
                                                                  </li>
                                                                </ul>
                                                                <p>
                                                                <h4>Program Schedule:</h4>
                                                                <p><strong>🗓️ Dates:</strong> November 13, 2024 to first week of January 2025</p>
                                                                <p><strong>⏰ Time:</strong> Each session will run from 6:00 PM to 7:30 PM ET on Wednesdays</p>
                                                                <p><strong>Note:</strong> The session in the first week of January will be on Thursday, January 2nd, 2025.</p>
                                                                <h4>🏆&nbsp;YSC League Participation:</h4>
                                                                <ul>
                                                                  <li
                                                                    style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                    <span style="font-weight: 400;">Seven-game schedule plus playoffs (scheduled for January 4, 2025)</span>
                                                                  </li>
                                                                  <li
                                                                    style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                    <span style="font-weight: 400;">Game Location: YSC Sports, Wayne, PA</span>
                                                                  </li>
                                                                  <li
                                                                    style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                    <span style="font-weight: 400;">Game Days: Vary by age group and gender (see schedule below)</span>
                                                                  </li>
                                                                  <li
                                                                    style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                    <span style="font-weight: 400;">Game Duration: 40 minutes (6 field players + 1 goalkeeper)</span>
                                                                  </li>
                                                                </ul>
                                                                <p><strong>Game Schedule at YSC:</strong></p>
                                                                <ul>
                                                                  <li
                                                                    style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                    <span style="font-weight: 400;">Boys U8-U11: Saturdays</span>
                                                                  </li>
                                                                  <li
                                                                    style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                    <span style="font-weight: 400;">Boys U12-U13: Fridays</span>
                                                                  </li>
                                                                  <li
                                                                    style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                    <span style="font-weight: 400;">Boys U14 and above: Saturdays</span>
                                                                  </li>
                                                                  <li
                                                                    style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                    <span style="font-weight: 400;">Girls U8-U10: Mondays</span>
                                                                  </li>
                                                                  <li
                                                                    style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                    <span style="font-weight: 400;">Girls U11: Tuesdays</span>
                                                                  </li>
                                                                  <li
                                                                    style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                    <span style="font-weight: 400;">Girls U12-U13: Fridays</span>
                                                                  </li>
                                                                  <li
                                                                    style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                    <span style="font-weight: 400;">Girls U14 and above: Sundays</span>
                                                                  </li>
                                                                </ul>
                                                                <p>
                                                                <h4>💸&nbsp;Next Step - Registration Payment:</h4>
                                                                <span style="font-weight: 400;">The next step in securing ${result.playerFirstName}'s spot is to complete the registration payment of $400. <strong>We will send a separate email shortly with a unique payment link</strong> for you to complete this process securely.</span>
                                                                <h4>💬&nbsp;Stay Tuned:</h4>
                                                                <br>
                                                                <span style="font-weight: 400;">We're just as excited as you are for the winter ahead! Keep an eye on your inbox for our follow-up email containing the payment link and any additional information you might need.</span>
                                                                <br>
                                                                <p>Thank you for choosing the AthletiFi Winter Select Program for your soccer journey in 2024-2025. Let's make it a season
                                                                  to remember!
                                                                </p>
                                                                <br>
                                                                <p>Thank you,</p>
                                                                <p>AthletiFi Select Team</p>
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
        subject: "AthletiFi Summer Select: Complete Your Registration - Payment Link Inside",
        text: `
        Hello ${result.parentFirstName},
        
        We are thrilled for your interest in signing up ${result.playerFirstName} for AthletiFi Summer Select! Thank you for taking the first step towards an incredible summer of soccer.
        
        🌐 Secure payment link: ${result.stripePaymentLink}
        
        Please click on the above link to access our secure Stripe payment page, where you can complete your registration payment. If you have any issues or questions, please reach out to us at welcome@athletifiselect.com.
        
        🌟 To help you plan ahead, here's a quick recap of the program details:
        
        📍 Location: Arcadia University, Jean Lenox West Field
        
        🏠 Address: 450 South Easton Road, Glenside, PA 19038
        
        🗓️ Dates:
        • Week 1: Tuesday June 11 & Thursday June 13
        • Week 2: Tuesday June 18 & Thursday June 20
        • Week 3: Tuesday June 25 & Thursday June 27
        • (Break for independence day)
        • Week 4: Tuesday July 9 & Thursday July 11
        • Week 5: Tuesday July 16 & Thursday July 18
        • Week 6: Tuesday July 23 & Thursday July 25
        
        ⏰ Time: 5:30 p.m. to 7:00 p.m.
        
        🏆 Tournaments:
        • Hershey Summer Classic: June 15-16
        • EDP Summer Sizzler: July 27-28
        
        🙋 Questions? Please don't hesitate to contact us at welcome@athletifiselect.com. Your excitement and involvement make our program truly special, and we're here to ensure you have all the information you need.
        
        Best regards,
        
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
                                                                    <img height="38"
                                                                      src="https://vidalco.in/uploads/Athleti_Fi_Select_Logo_small_3529534c6b.png"
                                                                      style="border:0;display:block;outline:none;text-decoration:none;width:90%;font-size:13px;"
                                                                      width="140" />
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
                                                            <img src="https://vidalco.in/uploads/New_poster_bg_copy3423_2c6ba4817c.jpg" style="width:100%; height:auto;">
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                                            <p>Hello ${result.parentFirstName},</p>
                                                            <p>
                                                              We hope you are excited for AthletiFi Summer Select! As mentioned in our previous email, the next step to secure ${result.playerFirstName}'s spot in the program is to complete the registration payment. We've made this process simple and secure for your convenience.
                                                            </p>
                                                            <h4>🌐&nbsp;<a href=${result.stripePaymentLink || 'https://www.athleti.fi/not-found'} style="color: #0092c4;">Click here to complete your payment</a></h4>
                                                            <p>Please click on the above link to access our secure Stripe payment page, where you can complete your registration payment. If you have any issues or questions, please reach out to us at <a href="mailto:welcome@athletifiselect.com?subject=Question%20about%20AthletiFi%20Select" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4">welcome@athletifiselect.com</a>.</p>
                                                            <h4>🌟&nbsp;Program Recap</h4>
                                                            <p>To help you plan ahead, here's a quick recap of the program details:</p>
                                                            <p><strong>📍&nbsp;Location: </strong>Arcadia University, Jean Lenox West Field</p>
                                                            <p><strong>🏠&nbsp;Address: </strong>450 South Easton Road, Glenside, PA 19038</p>
                                                            <p><strong>🗓️ Dates:</strong></p>
                                                            <ul>
                                                              <li
                                                                style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                <span style="font-weight: 400;"><strong>Week 1:</strong> Tuesday June 11 & Thursday June
                                                                13</span>
                                                              </li>
                                                              <li
                                                                style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                <span style="font-weight: 400;"><strong>Week 2: </strong>Tuesday June 18 & Thursday June
                                                                20</span>
                                                              </li>
                                                              <li
                                                                style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                <span style="font-weight: 400;"><strong>Week 3: </strong>Tuesday June 25 & Thursday June
                                                                27</span>
                                                              </li>
                                                              <li
                                                                style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                <span style="font-weight: 400;">(Break for independence day)</span>
                                                              </li>
                                                              <li
                                                                style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                <span style="font-weight: 400;"><strong>Week 4: </strong>Tuesday July 9 & Thursday July
                                                                11</span>
                                                              </li>
                                                              <li
                                                                style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                <span style="font-weight: 400;"><strong>Week 5: </strong>Tuesday July 16 & Thursday July
                                                                18</span>
                                                              </li>
                                                              <li
                                                                style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                <span style="font-weight: 400;"><strong>Week 6: </strong>Tuesday July 23 & Thursday July
                                                                25</span>
                                                              </li>
                                                            </ul>
                                                            <p><strong>⏰&nbsp;Time: </strong>5:30 p.m. to 7:00 p.m.</p>
                                                            <p><strong>🏆&nbsp;Tournaments:</strong></p>
                                                            <ul>
                                                              <li
                                                                style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                <span style="font-weight: 400;"><a href="https://www.hersheysoccer.org/summerclassic"
                                                                  style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;">Hershey
                                                                Summer Classic:</a> June 15-16</span>
                                                              </li>
                                                              <li
                                                                style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                <span style="font-weight: 400;"><a href="https://www.edpsoccer.com/summer-sizzler"
                                                                  style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;">EDP Summer
                                                                Sizzler:</a> July 27-28</span>
                                                              </li>
                                                            </ul>
                                                            <h4>⚽️&nbsp;Get Ready for an Amazing Summer!</h4>
                                                            <p>With registration nearly complete, it's time to gear up for an exciting summer of soccer, skill development, and new friendships.</p>
                                                            <p>Best regards,</p><br>
                                                            <p>AthletiFi Select Team</p>
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
        
        Congratulations! We have received your payment, and ${result.playerFirstName} is officially enrolled in the AthletiFi Summer Select program for the summer of 2024. If you have any questions or concerns regarding your payment, please don't hesitate to reach out to our team.
        
        Next Steps:

        📋Waivers and Questionnaire:
        Please complete the following tasks as soon as possible:
        1. Complete the questionnaire using the following link: https://forms.gle/hwZWbjJJ6PAfN8Qq5
        2. Print out and fill in the Waiver Form: https://athletifi.com/:b:/s/AthletiFi/EWyPkRQgvNJFqTv7QxhC7HAB_ls1BD3ZeqeBXe5G8Y_j4A?e=SKWk47
        3. Print out and fill in the Concussion Consent Form - https://athletifi.com/:b:/s/AthletiFi/EX0iYpO60jBGlXNFIzcqxXQBgwi6T077XyxTpoAWmq93lw?e=5VqfQV
          - NOTE: If you are unable to print the forms, please let us know and we will provide one for you to fill out at the next training session.

        👕 **Uniforms:**
        AthletiFi jerseys will be provided. Please ensure your child has navy blue shorts and socks for all training sessions and tournaments.

        📱 **Join TeamSnap:**
        Look out for an invite to join our TeamSnap group, where we will share important updates and communications throughout the summer.

        ⚽Program Details: 
        As a reminder, here are the key details for the AthletiFi Summer Select program:

        📍 Location: Arcadia University, Jean Lenox West Field (450 South Easton Road, Glenside, PA 19038)
        🗓️ Dates: Every Tuesday and Thursday from June 11 to July 25, with a break during Independence week.
        ⏰ Time: Each session will be from 5:30 to 7:00 p.m.

        🏆 Tournaments:
        • EDP Summer Sizzler: July 27-28
        Please mark your calendars and stay tuned for final confirmations and any additional tournament opportunities.

        🎴AthletiFi Player Cards and Dashboard:
        As part of the AthletiFi Summer Select experience, each player will receive their own physical player card. These cards feature the player's photo and a unique QR code. When scanned, the QR code grants access to the AthletiFi Dashboard, a new digital platform designed to provide engaging and easy-to-follow insights on your child's soccer performance.
        
        Key features of the AthletiFi Dashboard include:
        • Real-time performance tracking with detailed statistics and trends
        • Video highlights showcasing your child's skills and achievements
        • Comprehensive game recaps with insightful analytics

        Throughout the summer, we will be utilizing the AthletiFi dashboard to share program highlights, performance updates, and important information. We encourage you to explore this powerful tool and use it to stay connected with your child's soccer experience.

        🤝 Our Commitment to You:
        We are committed to providing a safe, supportive, and fun environment for all participants. If you have any questions or concerns at any point, we are here to assist you.

        We are thrilled to have ${result.playerFirstName} as part of the AthletiFi Summer Select family. Get ready for a summer filled with skill development, new friendships, and a shared passion for the beautiful game.

        See you on the field soon!
        
        Best regards,
        
        AthletiFi Select Team
        www.athletifiselect.com

        🙋 Questions? Please don't hesitate to contact us at welcome@athletifiselect.com. Your excitement and involvement make our program truly special, and we're here to ensure you have all the information you need.
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
                                                                    <img height="38"
                                                                      src="https://vidalco.in/uploads/Athleti_Fi_logo_horizontal_small_b8288b9c0a.png"
                                                                      style="border:0;display:block;outline:none;text-decoration:none;height:38px;width:100%;font-size:13px;"
                                                                      width="140" />
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
                                                            <img src="https://vidalco.in/uploads/New_poster_bg_copy3423_2c6ba4817c.jpg" style="width:100%; height:auto;">
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                                            <div
                                                              style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:16px;line-height:24px;text-align:left;color:#737F8D;">
                                                              <p>Hello ${result.parentFirstName},</p>
                                                              <p>
                                                                Congratulations! We have received your payment, and ${result.playerFirstName} is officially enrolled in the AthletiFi Summer Select program for the summer of 2024. If you have any questions or concerns regarding your payment, please don't hesitate to reach out to our team.
                                                              </p>
                                                              <p>
                                                                Here are the next steps to keep your eyes on between now and the start of summer:
                                                              </p>
                                                              <h4>📋&nbsp;Waivers and Questionnaire</h4>
                                                              <p>
                                                                In the coming weeks, we will send you a set of standard waivers which will need to be signed before the start of the program. We will also send you a questionnaire to gather important information, such as shirt size, to ensure we have everything set for ${result.playerFirstName} on day 1.
                                                              </p>
                                                              <ol>
                                                                <li>Complete the <a href="https://forms.gle/hwZWbjJJ6PAfN8Qq5" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;"><b>questionnaire</b></a>.</li>
                                                                <li>Print out and sign the <a href="https://athletifi.sharepoint.com/:b:/s/AthletiFi/EWyPkRQgvNJFqTv7QxhC7HAB_ls1BD3ZeqeBXe5G8Y_j4A?e=SKWk47" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;"><b>Waiver</b></a>.</li>
                                                                <li>Print out and sign the <a href="https://athletifi.sharepoint.com/:b:/s/AthletiFi/EX0iYpO60jBGlXNFIzcqxXQBgwi6T077XyxTpoAWmq93lw?e=5VqfQV" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;"><b>Concussion Consent Form</b></a>.</li>
                                                              </ol>
                                                            </div>
                                                            <h4>👕&nbsp;Uniforms</h4>
                                                            <p>
                                                              AthletiFi jerseys will be provided. Please ensure your child has navy blue shorts and socks for all training sessions and tournaments.
                                                            </p>
                                                            <h4>📱&nbsp;Join TeamSnap</h4>
                                                            <p>
                                                              Look out for an invite to join our TeamSnap group, where we will share important updates and communications throughout the summer.
                                                            </p>
                                                            <p>
                                                              If you do not receive a TeamSnap email in the next few days, please reach out to us at <a href="mailto:welcome@athletifiselect.com?subject=Question%20about%20AthletiFi%20Select" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4">welcome@athletifiselect.com</a>!
                                                            </p>
                                                            <h4>⚽&nbsp;Program Recap</h4>
                                                            <p>As a reminder, here are the key details for the AthletiFi Summer Select program:</p>
                                                            <p><strong>📍&nbsp;Location: </strong>Arcadia University, Jean Lenox West Field (450 South Easton Road, Glenside, PA 19038)</p>
                                                            <p><strong>🗓️&nbsp;Dates: </strong>Every Tuesday and Thursday from June 11 to July 25, with a break during Independence week.</p>
                                                            <p><strong>⏰&nbsp;Time: </strong>Each session will be from 5:30 to 7:00 p.m.</p>
                                                            <p><strong>🏆&nbsp;Tournaments:</strong></p>
                                                            <ul>
                                                              <li
                                                                style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                <span style="font-weight: 400;"><a href="https://www.hersheysoccer.org/summerclassic"
                                                                  style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;">Hershey
                                                                Summer Classic:</a> June 15-16<b>[completed]</b></span>
                                                              </li>
                                                              <li
                                                                style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                <span style="font-weight: 400;"><a href="https://www.edpsoccer.com/summer-sizzler"
                                                                  style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;">EDP Summer
                                                                Sizzler:</a> July 27-28</span>
                                                              </li>
                                                            </ul>
                                                            <p>Please mark your calendars and stay tuned for final confirmations and any additional tournament opportunities.</p>
                                                            <h4>🎴&nbsp;AthletiFi Player Cards and Dashboard</h4>
                                                            <p>
                                                              As part of the AthletiFi Summer Select experience, each player will receive their own physical player card. These cards feature the player's photo and a unique QR code. When scanned, the QR code grants access to the AthletiFi Dashboard, a new digital platform designed to provide engaging and easy-to-follow insights on your child's soccer performance.
                                                            </p>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="center" style="padding:10px 0;">
                                                            <img src="https://vidalco.in/uploads/new_mockup_3738ee1473.jpg" style="width:70%; height:auto;">
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                                            <p>
                                                              Key features of the AthletiFi Dashboard include:
                                                            </p>
                                                            <ul>
                                                              <li
                                                                style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                <span style="font-weight: 400;">Real-time performance tracking with detailed statistics and trends</span>
                                                              </li>
                                                              <li
                                                                style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                <span style="font-weight: 400;">Video highlights showcasing your child's skills and achievements</span>
                                                              </li>
                                                              <li
                                                                style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size: 16px;color: #4F5660;margin: 4px 0;letter-spacing: 0;line-height: 22px;font-weight: 600;">
                                                                <span style="font-weight: 400;">Comprehensive game recaps with insightful analytics</span>
                                                              </li>
                                                            </ul>
                                                            <p>
                                                              Throughout the summer, we will be utilizing the AthletiFi dashboard to share program highlights, performance updates, and important information. We encourage you to explore this powerful tool and use it to stay connected with ${result.playerFirstName}'s soccer experience.
                                                            </p>
                                                            <h4>🤝&nbsp;Our Commitment to You</h4>
                                                            <p>
                                                              We are committed to providing a safe, supportive, and fun environment for all participants. If you have any questions or concerns at any point, we are here to assist you.
                                                            </p>
                                                            <p>
                                                              We are thrilled to have ${result.playerFirstName} as part of the AthletiFi Summer Select family. Get ready for a summer filled with skill development, new friendships, and a shared passion for the beautiful game.
                                                            </p>
                                                            <p>See you on the field soon!</p><br>
                                                            <p>Best regards,</p><br>
                                                            <p>AthletiFi Select Team</p>
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

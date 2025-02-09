module.exports = {
  async sendInfoSessionEmail() {
    const summerSelectSignupService = strapi.query('api::summer-select-signup.summer-select-signup');

    // Fetch users who have paid
    const usersWhoPaid = await summerSelectSignupService.findMany({
      where: {
        // stripePaid: true,
        // email: 'example@test.com',
        // email: 'cjuiliano0515@comcast.net',
        eligible: true,
      },
    });

    for (const user of usersWhoPaid) {
      const emailContent = {
        to: user.email,
        from: `AthletiFi Select <${process.env.SENDGRID_DEFAULT_EMAIL_FROM}>`,
        replyTo: process.env.SENDGRID_DEFAULT_EMAIL_REPLY_TO,
        subject: '[AthletiFi Select] Please fill out this Questionnaire + Upcoming Info Session - Important Details Inside!',
        text: `
          Hello ${user.parentFirstName},

          We are excited to welcome ${user.playerFirstName} on the field in just one month! To ensure that everyone is fully prepared and informed, we will be hosting an information session for parents the week before the first day of training.

          💡 Info Session Details:
          🗓️ Date: Tuesday, June 4th
          ⏰ Time: 6:30 p.m.
          📍 Location: Online via Microsoft Teams. Join the meeting here: https://teams.microsoft.com/l/meetup-join/19%3ameeting_YmE1MWUxOTItYjc1YS00NjljLThlNjItMTkwZTI4M2Q4Mjg0%40thread.v2/0?context=%7b%22Tid%22%3a%226696caf2-fe32-4d32-868b-74be3f1cd68c%22%2c%22Oid%22%3a%22fc98153b-c538-4a48-aabd-c2619eb300ee%22%7d

          We strongly encourage you to make every effort to attend, as we will be covering important information about the upcoming program, demonstrating the AthletiFi platform, and answering any questions you may have.

          ❓ Questionnaire:
          We request all parents to fill out a brief questionnaire to help us gather essential information to ensure everyone is ready on day one. Please click here to complete the questionnaire: https://forms.gle/hwZWbjJJ6PAfN8Qq5

          🍫 Hershey Summer Classic Tournament Details:
          Our first tournament, the Hershey Summer Classic, will take place on June 15-16, shortly after our initial training sessions on June 11 and June 13. This tournament will be an excellent opportunity for our young athletes to showcase their skills early in the program.

          🏠 Lodging Information:
          For those requiring lodging for the Hershey Summer Classic, please use the following link to book accommodations: Halpern Travel - Hershey Summer Classic 2024: https://www.halperntravel.com/event/hershey-summer-classic-2024

          We are looking forward to an exciting and productive season with your young athletes! Should you have any questions or need further assistance, please do not hesitate to contact us.

          See you on the field soon!

          Best regards,
          AthletiFi Select Team
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
                                                                      <div style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:16px;line-height:24px;text-align:left;color:#737F8D;">
                                                                        <p>Hello ${user.parentFirstName},</p>
                                                                        <p>
                                                                          We are excited to welcome ${user.playerFirstName} on the field in just one month! To ensure that everyone is fully prepared and informed, we will be hosting an information session for parents the week before the first day of training. 
                                                                        </p>
                                                                        <h4>
                                                                          💡&nbsp;Info Session Details:
                                                                        </h4>
                                                                        <p><strong>🗓️&nbsp;Date: </strong>Tuesday, June 4th</p>
                                                                        <p><strong>⏰&nbsp;Time: </strong>6:30 p.m.</p>
                                                                        <p><strong>📍&nbsp;Location: </strong>Online via Microsoft Teams.
                                                                          <a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_YmE1MWUxOTItYjc1YS00NjljLThlNjItMTkwZTI4M2Q4Mjg0%40thread.v2/0?context=%7b%22Tid%22%3a%226696caf2-fe32-4d32-868b-74be3f1cd68c%22%2c%22Oid%22%3a%22fc98153b-c538-4a48-aabd-c2619eb300ee%22%7d">
                                                                            🔗 Join the meeting here
                                                                          </a>
                                                                        </p>
                                                                        <p>We strongly encourage you to make every effort to attend, as we will be covering important information about the upcoming program, demonstrating the AthletiFi platform, and answering any questions you may have.</p>
                                                                        <!-- 
                                                                        <p><strong>🔗&nbsp;Access the meeting:</strong> 
                                                                          <a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_YmE1MWUxOTItYjc1YS00NjljLThlNjItMTkwZTI4M2Q4Mjg0%40thread.v2/0?context=%7b%22Tid%22%3a%226696caf2-fe32-4d32-868b-74be3f1cd68c%22%2c%22Oid%22%3a%22fc98153b-c538-4a48-aabd-c2619eb300ee%22%7d">
                                                                            Click here to join the meeting
                                                                          </a>
                                                                        </p>
                                                                        <p><strong>🆔&nbsp;Meeting ID:</strong> 211 153 416 813</p>
                                                                        <p><strong>🔑&nbsp;Passcode:</strong> rZ98fv</p>
                                                                        <p>
                                                                          <strong>
                                                                            📞&nbsp;Dial in by phone:
                                                                          </strong>
                                                                          <a href="tel:+19293522689,,285352407#">
                                                                            +1 929-352-2689,,285352407#
                                                                          </a>
                                                                          <p>
                                                                            <strong>📞&nbsp;Phone conference ID:</strong> 285 352 407#
                                                                          </p>
                                                                        </p> -->
                                                                      </div>
                                                                      <h4>
                                                                        ❓&nbsp;Questionnaire:
                                                                      </h4>
                                                                      <p>
                                                                        We request all parents to fill out a brief questionnaire to help us gather essential information to ensure everyone is ready on day one.
                                                                        👉
                                                                        <a href="https://forms.gle/hwZWbjJJ6PAfN8Qq5" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;">
                                                                          Please click here to complete the questionnaire!
                                                                        </a>
                                                                        👈
                                                                      </p>
                                                                      <h4>
                                                                        🍫&nbsp;Hershey Summer Classic Tournament Details:
                                                                      </h4>
                                                                      <p>
                                                                        Our first tournament, the Hershey Summer Classic, will take place on June 15-16, shortly after our initial training sessions on June 11 and June 13. This tournament will be an excellent opportunity for our young athletes to showcase their skills early in the program.
                                                                      </p>
                                                                      <h4>🏠&nbsp;Lodging Information:</h4>
                                                                      <p>
                                                                        For those requiring lodging for the Hershey Summer Classic, please use the following link to book accommodations:
                                                                        <br>
                                                                        <a href="https://www.halperntravel.com/event/hershey-summer-classic-2024" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4;">
                                                                          Halpern Travel - Hershey Summer Classic 2024
                                                                        </a>
                                                                      </p>
                                                                      <br>
                                                                      <p>
                                                                        We are looking forward to an exciting and productive season with your young athletes! Should you have any questions or need further assistance, please do not hesitate to contact us.
                                                                      </p>
                                                                      <p>See you on the field soon!</p><br>
                                                                      <p>Best regards,</p><br>
                                                                      <p>AthletiFi Select Team</p>
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
        await strapi.plugins['email'].services.email.send(emailContent);
        console.log(`Info session email sent to ${user.email}`);
      } catch (error) {
        console.error('Error sending info session email:', error);
      }
    }
  },
  async sendPaymentReminder() {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Normalize the current date to the start of the day before any calculations

    const eightDaysAgo = new Date(currentDate);
    eightDaysAgo.setDate(eightDaysAgo.getDate() - 8);
    const eightDaysAgoPlusOneDay = new Date(eightDaysAgo);
    eightDaysAgoPlusOneDay.setDate(eightDaysAgoPlusOneDay.getDate() + 1);

    const sixteenDaysAgo = new Date(currentDate);
    sixteenDaysAgo.setDate(sixteenDaysAgo.getDate() - 16);
    const sixteenDaysAgoPlusOneDay = new Date(sixteenDaysAgo);
    sixteenDaysAgoPlusOneDay.setDate(sixteenDaysAgoPlusOneDay.getDate() + 1);
    
    const twentyFourDaysAgo = new Date(currentDate);
    twentyFourDaysAgo.setDate(twentyFourDaysAgo.getDate() - 24);
    const twentyFourDaysAgoPlusOneDay = new Date(twentyFourDaysAgo);
    twentyFourDaysAgoPlusOneDay.setDate(twentyFourDaysAgoPlusOneDay.getDate() + 1);

    console.log("For 1st Payment Reminder, the record must have been updated between", eightDaysAgo, "and", eightDaysAgoPlusOneDay);
    console.log("For 2nd Payment Reminder, the record must have been updated between", sixteenDaysAgo, "and", sixteenDaysAgoPlusOneDay);
    console.log("For 3rd Payment Reminder, the record must have been updated between", twentyFourDaysAgo, "and", twentyFourDaysAgoPlusOneDay);

    const summerSelectSignupService = strapi.query('api::summer-select-signup.summer-select-signup');

    // Send third reminder email
    const usersForThirdReminder = await summerSelectSignupService.findMany({
      where: {
        stripePaid: false,
        eligible: true,
        updatedAt: {
          $gte: twentyFourDaysAgo,
          $lt: twentyFourDaysAgoPlusOneDay
        },
      },
    });

    for (const user of usersForThirdReminder) {
      console.log(`Sending third, but NOT the last reminder to: ${user.parentFirstName} at ${user.email}`);
      const emailContent = {
        to: user.email,
        from: `AthletiFi Select <${process.env.SENDGRID_DEFAULT_EMAIL_FROM}>`,
        replyTo: process.env.SENDGRID_DEFAULT_EMAIL_REPLY_TO,
        subject: `⚽ Time is Running Out - Complete ${user.playerFirstName}'s AthletiFi Summer Select Registration Now`,
        text: `
        ${user.parentFirstName},

        As the start of AthletiFi Summer Select fast approaches, we wanted to touch base with you regarding ${user.playerFirstName}'s registration. 

        We are planning on finalizing teams in the next couple weeks, and we want to ensure that ${user.playerFirstName} doesn't miss their chance to join. 

        To guarantee ${user.playerFirstName}'s spot in the program, please click here: ${user.stripePaymentLink || 'https://www.athleti.fi/not-found'}

        We understand that circumstances can change, and if you have decided not to have ${user.playerFirstName} participate in the program, please let us know so we can plan accordingly. 

        If you are still interested in having ${user.playerFirstName} join us this summer but are experiencing difficulties with the payment process, please write to us at welcome@athletifiselect.com. We would be happy to explore options to help make the registration process more manageable for your family.

        We appreciate your attention to this matter and look forward to the possibility of having ${user.playerFirstName} join us this summer.

        Thank you,
        AthletiFi Select Team
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
              color: #11568c !important;
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
                                                                  <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                                                    <div
                                                                      style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:16px;line-height:24px;text-align:left;color:#737F8D;">
                                                                      <p>${user.parentFirstName},</p>
                                                                      <p>
                                                                        As the start of AthletiFi Summer Select fast approaches, we wanted to touch base with you regarding ${user.playerFirstName}'s registration. 
                                                                      </p>
                                                                      <p>
                                                                        We are planning on finalizing teams in the next couple weeks and we want to ensure that ${user.playerFirstName} doesn't miss their chance to join. 
                                                                      </p>
                                                                    </div>
                                                                    <span> ⚽️&nbsp;
                                                                      <a
                                                                        href=${user.stripePaymentLink || 'https://www.athleti.fi/not-found'}
                                                                        style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4; font-weight: 600"
                                                                      >
                                                                        Please click here 
                                                                      </a>
                                                                      to complete the registration payment and secure ${user.playerFirstName}'s spot in the program.
                                                                    </span>
                                                                    <p><br></p>
                                                                    <p><strong>We're here to help</strong></p>
                                                                    <p>
                                                                      If you are still interested in having ${user.playerFirstName} join us this summer but are experiencing difficulties with the payment process, please write to us at <a href="mailto:welcome@athletifiselect.com?subject=Payment%20for%20${user.playerFirstName}" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4">welcome@athletifiselect.com</a>. We are committed to working with families to help make the registration process more manageable for everyone. 
                                                                    </p>
                                                                    <p>
                                                                      We appreciate your attention to this matter and look forward to the possibility of having ${user.playerFirstName} join us this summer.
                                                                    </p>
                                                                    <br>
                                                                    <p>Thank you,</p>
                                                                    <p>AthletiFi Select Team</p>
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
        await strapi.plugins['email'].services.email.send(emailContent);
        console.log(`3rd payment reminder sent!------------------------------`);
      } catch ({ response }) {
        console.log(response.body);
      }
    }

    // Send second reminder email
    const usersForSecondReminder = await summerSelectSignupService.findMany({
      where: {
        stripePaid: false,
        eligible: true,
        updatedAt: {
          $gte: sixteenDaysAgo,
          $lt: sixteenDaysAgoPlusOneDay
        },
      },
    });

    for (const user of usersForSecondReminder) {
      console.log(`Sending second reminder to: ${user.parentFirstName} at ${user.email}`);
      const emailContent = {
        to: user.email,
        from: `AthletiFi Select <${process.env.SENDGRID_DEFAULT_EMAIL_FROM}>`,
        replyTo: process.env.SENDGRID_DEFAULT_EMAIL_REPLY_TO,
        subject: `Second Payment Reminder for ${user.playerFirstName} - We're Here to Help`,
        text: `
        Dear ${user.parentFirstName},

        We hope this email finds you well. We wanted to reach out because we haven't yet received the registration payment for ${user.playerFirstName}'s enrollment in AthletiFi Summer Select.

        Click here to pay for ${user.playerFirstName}: ${user.stripePaymentLink || 'https://www.athleti.fi/not-found'}
        (If you've recently completed the payment, please disregard this reminder.)

        We understand that life can present unexpected challenges, and we want to ensure that ${user.playerFirstName} has the opportunity to join us on the field this summer. If there's anything we can do to help make the registration process more manageable for your family, please write to us at welcome@athletifiselect.com. We would be happy to explore options to help make the registration process more manageable for your family. 

        Best regards,
        AthletiFi Select Team
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
              color: #11568c !important;
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
                                                                  <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                                                    <div
                                                                      style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:16px;line-height:24px;text-align:left;color:#737F8D;">
                                                                      <p>Dear ${user.parentFirstName},</p>
                                                                      <p>
                                                                        We hope this email finds you well. We wanted to reach out because we haven't yet received the registration payment for ${user.playerFirstName}'s enrollment in AthletiFi Summer Select.
                                                                      </p>
                                                                    </div>
                                                                    <span> ⚽️&nbsp;<a
                                                                      href=${user.stripePaymentLink || 'https://www.athleti.fi/not-found'}
                                                                      style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4; font-weight: 600">Click here to pay for ${user.playerFirstName}.</a>
                                                                    </span>
                                                                    <p style="font-size: 13px;">
                                                                      (If you've recently completed the payment, please disregard this reminder.)
                                                                    </p>
                                                                    <br>
                                                                    <p><strong>Need some more time?</strong></p>
                                                                    <p>
                                                                      We understand that life can present unexpected challenges, and we want to ensure that ${user.playerFirstName} has the opportunity to join us on the field this summer.
                                                                    </p>
                                                                    <p>
                                                                      If there's anything we can do to help make the registration process more manageable for your family, please write to us at <a href="mailto:welcome@athletifiselect.com?subject=Payment%20for%20${user.playerFirstName}" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4">welcome@athletifiselect.com</a>. We would be happy to explore options to help make the registration process more manageable for your family.
                                                                    </p>
                                                                    <br>
                                                                    <p>Best regards,</p>
                                                                    <p>AthletiFi Select Team</p>
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
        await strapi.plugins['email'].services.email.send(emailContent);
        console.log(`2nd payment reminder sent!------------------------------`);
      } catch ({ response }) {
        console.log(response.body);
      }
    }

    // Send first reminder email
    const usersForFirstReminder = await summerSelectSignupService.findMany({
      where: {
        stripePaid: false,
        eligible: true,
        updatedAt: {
          $gte: eightDaysAgo,
          $lt: eightDaysAgoPlusOneDay
        },
      },
    });

    for (const user of usersForFirstReminder) {
      console.log(`Sending first reminder to: ${user.parentFirstName} at ${user.email}`);
      const emailContent = {
        to: user.email,
        from: `AthletiFi Select <${process.env.SENDGRID_DEFAULT_EMAIL_FROM}>`,
        replyTo: process.env.SENDGRID_DEFAULT_EMAIL_REPLY_TO,
        subject: `Friendly Reminder: Secure ${user.playerFirstName}'s Spot in the AthletiFi Summer Select Program!`,
        text: `
        Hello ${user.parentFirstName},

        We're eagerly counting down to the start of the AthletiFi Summer Select Program, and we can't wait to welcome ${user.playerFirstName} onto the field!

        We noticed that the registration payment for ${user.playerFirstName} has not yet been submitted. Please complete it soon to secure ${user.playerFirstName}'s place in AthletiFi Summer Select.

        Secure your spot: ${user.stripePaymentLink || 'https://www.athleti.fi/not-found'}
        (If you've recently completed the payment, please disregard this reminder.)

        Need a Hand?
        If have any questions or need help with the payment process — or if there's anything else we can help you with — please don't hesitate to let us know. You can contact us at welcome@athletifiselect.com.

        We understand life gets busy, and we appreciate your attention to this detail. Your participation makes AthletiFi Summer Select truly special, and we're here to support ${user.playerFirstName}'s soccer journey every step of the way. Here's to a summer filled with growth, challenges, and fun on the soccer field!

        Thank you,

        AthletiFi Select Team
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
              color: #11568c !important;
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
                                                                  <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                                                    <div
                                                                      style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:16px;line-height:24px;text-align:left;color:#737F8D;">
                                                                      <p>Hello ${user.parentFirstName},</p>
                                                                      <p>
                                                                        We're eagerly counting down to the start of the AthletiFi Summer Select Program, and we can't wait to welcome ${user.playerFirstName} onto the field!
                                                                      </p>
                                                                      <p>
                                                                        We noticed that the registration payment for ${user.playerFirstName} has not yet been submitted. Please complete it soon to secure ${user.playerFirstName}'s place in AthletiFi Summer Select.
                                                                      </p>
                                                                    </div>
                                                                    <span> ⚽️&nbsp;<a
                                                                      href=${user.stripePaymentLink || 'https://www.athleti.fi/not-found'}
                                                                      style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4; font-weight: 600">Secure ${user.playerFirstName}'s spot.</a>
                                                                    </span>
                                                                    <p style="font-size: 13px;">
                                                                      (If you've recently completed the payment, please disregard this reminder.)
                                                                    </p>
                                                                    <br>
                                                                    <p><strong>Need a hand?</strong></p>
                                                                    <p>
                                                                      If have any questions or need help with the payment process — or if there's anything else we can help you with — please reach out! You can contact us at <a href="mailto:welcome@athletifiselect.com?subject=Question%20about%20AthletiFi%20Select" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4">welcome@athletifiselect.com</a>.
                                                                    </p>
                                                                    <br>
                                                                    <p>Thank you,</p>
                                                                    <p>AthletiFi Select Team</p>
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
        await strapi.plugins['email'].services.email.send(emailContent);
        console.log(`1st payment reminder sent!------------------------------`);
      } catch ({ response }) {
        console.log(response.body);
      }
    }
    const lastReminderDate = new Date('2025-04-23');
    console.log('REminder date:',lastReminderDate.toDateString())
    console.log('Todays date:',currentDate.toDateString())
    if (currentDate.toDateString() === lastReminderDate.toDateString()) {
      const usersForLastReminder = await summerSelectSignupService.findMany({
        where: {
          stripePaid: false,
          eligible: true,
        },
      });

      for (const user of usersForLastReminder) {
        console.log(`Sending APRIL 23RD reminder to: ${user.parentFirstName} at ${user.email}`);
        const emailContent = {
          to: user.email,
          from: `AthletiFi Select <${process.env.SENDGRID_DEFAULT_EMAIL_FROM}>`,
          replyTo: process.env.SENDGRID_DEFAULT_EMAIL_REPLY_TO,
          subject: `Only 7 days left! Last Chance to Secure ${user.playerFirstName}'s Spot`,
          text: `
          Dear ${user.parentFirstName},

          Only 7 days left until the team rosters for AthletiFi Summer Select are finalized on April 30th.
          
          To ensure ${user.playerFirstName} doesn't miss out, please complete the payment as soon as possible:

          Secure your spot: ${user.stripePaymentLink || 'https://www.athleti.fi/not-found'}

          If you have any questions or need assistance with the payment process, please don't hesitate to reach out to us at welcome@athletifiselect.com. We're here to help!

          Please note that after April 30, 2025, we cannot guarantee ${user.playerFirstName}'s spot in the program.

          We're excited about the prospect of having ${user.playerFirstName} join us this summer and look forward to your prompt response.

          Best regards,
          AthletiFi Select Team
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
                color: #11568c !important;
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
                                                                    <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                                                      <div
                                                                        style="font-family:Poppins, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:16px;line-height:24px;text-align:left;color:#737F8D;">
                                                                        <p>${user.parentFirstName},</p>
                                                                        <p>
                                                                          <strong>Only 7 days left</strong> until the team rosters for AthletiFi Summer Select are finalized on April 30. 
                                                                        </p>
                                                                        <p>
                                                                          To ensure ${user.playerFirstName} doesn't miss out, please complete the payment as soon as possible.
                                                                        </p>
                                                                      </div>
                                                                      <span> ⚽️&nbsp;
                                                                        <a
                                                                          href=${user.stripePaymentLink || 'https://www.athleti.fi/not-found'}
                                                                          style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4; font-weight: 600"
                                                                        >
                                                                          Please click here 
                                                                        </a>
                                                                        to complete the registration payment and secure ${user.playerFirstName}'s spot in the program.
                                                                      </span>
                                                                      <p><br></p>
                                                                      <p><strong>Time is running out!</strong></p>
                                                                      <p>
                                                                        If you still want ${user.playerFirstName} to join us this summer but have a special situation you need to discuss with us, please reach out at <a href="mailto:welcome@athletifiselect.com?subject=Payment%20for%20${user.playerFirstName}" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #0092c4">welcome@athletifiselect.com</a>. We are here to help! 
                                                                      </p>
                                                                      <p>
                                                                        Please note that we cannot guarantee ${user.playerFirstName}'s spot in the program after <strong>April 30</strong>.
                                                                      </p>
                                                                      <p>
                                                                        We're excited about the prospect of having ${user.playerFirstName} join us this summer and look forward to your prompt response.
                                                                      </p>
                                                                      <br>
                                                                      <p>Best,</p>
                                                                      <p>AthletiFi Select Team</p>
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
          await strapi.plugins['email'].services.email.send(emailContent);
          console.log(`Last payment reminder sent!------------------------------`);
        } catch ({ response }) {
          console.log(response.body);
        }
      }
    }
  }
};
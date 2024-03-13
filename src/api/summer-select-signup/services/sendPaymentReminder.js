module.exports = {
    async sendPaymentReminders() {
      // const tenDaysAgo = new Date();
      // tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      console.log("Date = ", sevenDaysAgo)

      // const sixtySecondsAgo = new Date(new Date().getTime() - (60 * 1000));
      // console.log("sixty seconds ago:", sixtySecondsAgo);

    const summerSelectSignupService = strapi.query('api::summer-select-signup.summer-select-signup');
    const users = await summerSelectSignupService.findMany({
        where: { 
          stripePaid: false, 
          eligible: true,
          // updatedAt: tenDaysAgo,
          updatedAt: {
            $lt: sevenDaysAgo 
        },
      }, 
    });
      for (const user of users) {
        console.log(user);
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
                                                                        <a href="https://www.athleti.fi/news" style="color: #0092c4; text-decoration: none">Check Our
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
          console.log(`Payment reminder sent to ${user.email}`);
        } catch ({ response }) {
          console.log(response.body);
        }
      }
  }}
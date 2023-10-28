import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"
import { fromIni } from "@aws-sdk/credential-providers"

import { google } from "googleapis"
import { authenticate } from "@google-cloud/local-auth"
import * as fs from "fs"

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']


//console.log( process.env.AWS_ACCESS_KEY_ID, ' : ', process.env.AWS_SECRET_ACCESS_KEY)

// google project id : dfc-site-378414

const REGION = "us-east-2"

const sesClient = new SESClient({
    region: REGION,
    credentials: {
      "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
      "accessKeyId": process.env.AWS_ACCESS_KEY_ID
    }

  })

//    credentials: fromIni({profile: 'dexforce'})


export default defineEventHandler(async(event) => {

    console.log('**** inside post method*****')
    const data = await readBody(event)
    console.log('data', data)

  /*
    const auth = await getAuthToken()

    const sheets = google.sheets({version:'v4', auth});


    const spreadsheetId = "184lXtbi6Sv03swSm49TIl0YBooCuWZE3hf40Pdg_Q8E"
  


    const submitDate = new Date()
    const name = data.name
    const company = data.company
    const jobTitle = data.jobTitle
    const phone = data.phone
    const email = data.email
    const message = data.message

    const values = [
      [submitDate, name, company, jobTitle, phone, email, message]
    ]
    const resource = {
      values,
    }

    try {
      const res = await sheets.spreadsheets.values.append({
        spreadsheetId: spreadsheetId,
        range: "Sheet1",
        valueInputOption: "RAW",
        resource: resource
      })
      console.log(res.data.updates.updatedCells)


    } catch(e) {
      console.log(e)
    }

     */

    const sendEmailCommand = createSendEmailCommand( "awsadmin@dexforceconsulting.com", "michael@dexforceconsulting.com", data)


    try {
        return await sesClient.send(sendEmailCommand)

    } catch(e) {
        console.error("Failed to Send Eamil", e)
       return e
    }


    return data
})



const createSendEmailCommand = (fromAddress, toAddress, data) => {


  const msgBody = `
    New Lead from Contact Us Form <br/>
    Name: ${data.name} <br/>
    Job Title: ${data.jobTitle} <br/>
    Email: ${data.email} <br/>
    Phone: ${data.phone} <br/>
    Company: ${data.company} <br/>
    Message: ${data.message.replace("\n", "<br/>")}<br/>
  `

  const msgBodyText = `
    New Lead from Contact Us Form \n
    Name: ${data.name} \n
    Job Title: ${data.jobTitle} \n
    Email: ${data.email} \n
    Phone: ${data.phone} \n
    Company: ${data.company} \n
    Message: ${data.message}  \n
  `

  const subject = `New Lead : Contact Us Form => ${data.name} `

  return new SendEmailCommand({
    Destination: {
      CcAddresses: [
      ],
      ToAddresses: [
        toAddress,
      ],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: msgBody,
        },
        Text: {
          Charset: "UTF-8",
          Data: msgBodyText,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [
      
    ],
  });
};



async function getAuthToken() {
  try {
    const auth = new google.auth.GoogleAuth({
      scopes: SCOPES
    });
    const authToken = await auth.getClient();
    //console.log(authToken)
    return authToken;
  } catch (e) {
    console.error(e)
    return null
  }
}
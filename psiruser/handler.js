const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
} = require("@aws-sdk/lib-dynamodb");
const crypto  = require("crypto-js");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const express = require("express");
const serverless = require("serverless-http");
const cors = require('cors');
const app = express();

const USERS_TABLE = process.env.USERS_TABLE;
const AES_SECRET = "56snbwuy#kdhuyethj39738626rhhgfd";
const jwtSecret = "jskhshs54w57qjhyt2652geftsrhvhagskn@medgus";
const client = new DynamoDBClient();
const docClient = DynamoDBDocumentClient.from(client);

app.use(express.json());
const corsOptions = {
  origin: '*', // or '*' for all origins during development
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Amz-Date', 'X-Api-Key', 'X-Amz-Security-Token', 'X-Requested-With'],
  credentials: true,
  optionsSuccessStatus: 200 // Some legacy browsers choke on status 204
};

// Use CORS with the specified options
app.use(cors(corsOptions));
app.get("/",(req,res)=>{
  res.send("Hello World")
})
//all routes starts from here
app.post("/register", async (req, res) => {
  const {name,email,password,clg,phone} = req.body
  const hashpass = crypto.AES.encrypt(password,AES_SECRET).toString();
  //checking the user is exist or not;
  const getParams = {
    TableName: USERS_TABLE,
    Key: {
      email: email,
    },
  };
  try{
    const data = await docClient.send(new GetCommand(getParams));
  if(data.Item){
    return res.status(400).json({error:"User already exists",success:false})
  }
}
  catch(err){
    console.log(err)
    res.status(500).json({error:"Could not create user",success:false})
  }
  //create user
  const params = {
    TableName: USERS_TABLE,
    Item: {
      name: name,
      email: email,
      password: hashpass,
      clg: clg,
      phone: phone,
    },
  };
try{
let a = await docClient.send(new PutCommand(params));
const transporter = await nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
      user: "specareenterprises@gmail.com",
      pass: "XdIG2sMJZjyc6SWY",
  }
});
const info = await transporter.sendMail({
  from: '<account@deploylite.tech>', // sender address
  to: `${email}`, // list of receivers
  subject: `🎉 Welcome to DeployLite! You're Signed Up for Pratha Sir's Profollio Web! 🚀`, // Subject line
  text: "DeployLite", // plain text body
  html: `
 <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; color: #333;">
    <div style="max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <div style="text-align: center; padding: 10px 0;">
            <img src="https://your-logo-url.com/logo.png" alt="DeployLite Logo" style="max-width: 150px;">
        </div>
        <div style="line-height: 1.6; padding: 20px 0;">
            <h1 style="font-size: 24px; margin-bottom: 10px;">Welcome to DeployLite!</h1>
            <p style="margin: 10px 0;">Hi ${name},</p>
            <p style="margin: 10px 0;">Thank you for signing up for DeployLite. We are excited to have you on board!</p>
            <p style="margin: 10px 0;">You are also signed up for Pratha Sir's Profollio Web. Get ready to explore the amazing features and capabilities our platform offers.</p>
            <a href="https://psir.deploylite.tech" style="display: inline-block; padding: 10px 20px; margin: 20px 0; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px;">Get Started</a>
        </div>
        <div style="text-align: center; padding: 10px 0; font-size: 12px; color: #777;">
            <p>If you have any questions, feel free to <a href="mailto:support@deploylite.tech" style="color: #007bff; text-decoration: none;">contact us</a>.</p>
            <p>© 2024 DeployLite. All rights reserved.</p>
        </div>
    </div>
</body>
  `, 
});

res.status(200).json({message:"User created successfully",success:true})
}
catch(err){
  console.log(err)
  res.status(500).json({error:"Could not create user",success:false})
}
})
//login endpoint
app.post("/login", async (req, res) => {
  try{
    const {email,password} = req.body;
    const params = {
      TableName: USERS_TABLE,
      Key: {
        email: email,
      },
    };
    try{
     let data = await docClient.send(new GetCommand(params));
      if(!data.Item){
        return res.status(404).json({error:"User not found",success:false})
      }
      else{
        const decryptpass = crypto.AES.decrypt(data.Item.password,AES_SECRET).toString(crypto.enc.Utf8);
        if(decryptpass == password){
          const token = jwt.sign({email:email},jwtSecret);
          return res.status(200).json({message:"Login Successfull",success:true,token:token})
        }
        else{
          return res.status(401).json({error:"Invalid Password",success:false})
        }
      }
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:"Login Failed ! Db Error.",success:false})
    }
  }
  catch(err){
    console.log(err)
    res.status(500).json({error:"Some thing Went Wrong .Try again later!",success:false})
  }
})

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});
exports.handler = serverless(app);

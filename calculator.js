const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/bmicalculator", function(req, respo){
  respo.sendFile(__dirname + "/bmiCalculator.html")
})

app.get("/", function(req, respon){
  // respon.send(" Hello World in Auguest 2021 :)")
  // respon.sendFile("index.html")
  // respon.sendFile("__dirname");
  console.log(__dirname);
  respon.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, respon){
  // console.log(req.body);
  console.log(req.body.num1);

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  respon.send(" the result of our calculator becomes " + result)

  // respon.send("thank you Awara for posting")
})

app.post("/bmicalculator", function(req, respo){
  // console.log(req.body.weight);
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var result2 = weight + height;
  respo.send(" Your BMI is " + result2)
})

app.listen(3000, function(){
  console.log("server has started kaka, Auguest 2021")
})

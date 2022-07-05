import VM from "node:vm";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { dataset } from "./data.js";
import { formatInputValue } from "./helper.js";
const app = express();
app.use(cors());
const context = VM.createContext({
  res: null,
});
app.listen(5000, () => {
  console.log("listening on port 5000");
});
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.get("/questions", (req, res) => {
  res.send(dataset);
});

app.post("/question", (req, res) => {
  const { id } = req.body;
  res.send(dataset[`question_${id}`]);
});

app.post("/exec", (req, res) => {
  try {
    const { id, code } = req.body;
    const question = dataset[id];

    let sucessfullTestCases = 0;
    let didAllCasesPass = true;
    let failingTestCase = { num: null, input: null, output: null };
    question.testCases.every((testCase) => {
      const inputValue = Object.values(testCase.input);
      const script = new VM.Script(`
      ${code}
      res=execute(${formatInputValue(inputValue)});
      `);
      script.runInContext(context);
      if (context.res !== testCase.output) {
        failingTestCase.input = inputValue;
        failingTestCase.output = testCase.output;
        failingTestCase.num = sucessfullTestCases;
        didAllCasesPass = false;
        return false;
      } else {
        sucessfullTestCases++;
        return true;
      }
    });

    if (didAllCasesPass) {
      res.status(200).json({
        isCorrect: true,
        message: `All ${sucessfullTestCases} test cases passed. You can move on to the next question!`,
      });
    } else {
      question.atempt++;
      res.status(200).json({
        isCorrect: false,
        message: `Code is failing on test case number ${
          failingTestCase.num + 1
        }. For the input (${
          failingTestCase.input
        }) it is expecting an output of ${
          failingTestCase.output
        }. The output it recived is ${context.res}`,
        atempt: question.atempt,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
      headline: `The code broke somewhere in the execusion! Carefully check your code to see if you didn't make a typo`,
      didCodeBreak: true,
    });
  }
});

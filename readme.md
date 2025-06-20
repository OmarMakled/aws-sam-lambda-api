# Serverless Todo API with AWS Lambda & API Gateway

Use AWS SAM to deploy a lightweight serverless API that fetches todo items from an external API and serves them through API Gateway.



```bash
sam build
sam local invoke ListTodosFunction
npm run test
```

```bash
sam deploy --guided
sam delete
```
# Setup
#### 1. Create the .env file
  create the .env file from the .env.example file given

#### 2. Run the commands in sequence
**make sure you are in the backend directory**
> Initialize the npm project
```bash
npm i
```

> optinal step if you are making the db from scratch
```bash
npx prisma migreate dev 
```

> generate the prisma client
```bash
npx prisma generate
```

> start the server
```bash
npm run dev
```
# Checklist
- [ ] Authentication
  - [ ] signup
  - [ ] email verification
  - [ ] login


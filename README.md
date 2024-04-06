# Sanity Next Images

# Get Started
Clone repo
```sh
git clone https://github.com/ulysses-ck/sanity-next-images.git
```
Install dependencies
```sh
cd sanity-next-images
npm install
```
Start server
```sh
npm run server
```

To whatever you change to schema types, run the following commands to update the generated types:
```sh
npm run extract
npm run codegen
```

Also, you need to replace with your own credentials, run the following commands and ensure to get an account on Sanity
```
npx sanity@latest init
```

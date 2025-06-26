export default {
  rules: {
    "DRA-RULE": [2, "always"]
  },
  plugins: [
    {
      rules: {
        "DRA-RULE": ({ header }) => {
          const commitRegex = /^DRA-\d{2,}: .*/;
          return [
            commitRegex.test(header),
            `
            
            🚨 Wrong commit message! 😕
            
            Your commit message is wrong, the correct pattern is:
            
            ✅ "DRA-ID: description"
            
            ✅ full example: 
            
            git commit -m "DRA-99: Writing correctly a commit message"

            your message was :

            ❌ "${header}"
            `
          ];
        }
      }
    }
  ]
};

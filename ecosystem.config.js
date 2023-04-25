module.exports = {
  apps : [{
    name   : "Duald strapi",
    script : "yarn start",
    env_production: {
      HOST: "0.0.0.0",
      PORT: "1446",
      APP_KEYS: "sFkZDYJcAH0PuIA99zq+VA==,Mqs1cBWOJLseGez1UqXXZQ==,et9iv4ZNrSs4b+sJvcdAbQ==,K0tcyEOzDd4xroikcNmSjA==",
      API_TOKEN_SALT: "JAxQqi9pCVWmmZ0qmRJD6A==",
      ADMIN_JWT_SECRET: "x3zJJiebLrQwT/gS7hzzVg==",
      JWT_SECRET: "/h3UTeCyJMABg0PenkgLMw==",
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : ['164.90.191.142'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/duald-strapi.git',
      path : '/var/www/strapi',
      'post-deploy' : 'yarn && yarn build && pm2 reload ecosystem.config.js --env production',
    }
  }
};

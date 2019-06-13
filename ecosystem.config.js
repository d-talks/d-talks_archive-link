module.exports = {
    apps: [
        {
            name: "d-talks_link-archive",
            script: "./bin/www",
            env: {
                "PORT": 3000,
                "NODE_ENV": "development"
            },
            env_production: {
                "PORT": 8080,
                "NODE_ENV": "production"
            }
        }
    ]
};

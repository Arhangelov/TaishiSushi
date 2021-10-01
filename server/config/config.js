const config = {
    PORT: 5001,
    DB_URI: 'mongodb+srv://Arhangelov:Ss546213827913@taishicluster.klsgn.mongodb.net/taishiDB?retryWrites=true&w=majority',
    SALT_ROUNDS: 10,
    SECRET: 'HYPERSECRET',
    COOKIE_NAME: 'session'
};

module.exports = config;
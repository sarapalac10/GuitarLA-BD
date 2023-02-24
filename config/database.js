module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceqd5ppgp3jv6g61cn4g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_fnjq'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'M8C4IbB26xTsozggRnuFt3cLqFTEsFxK'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

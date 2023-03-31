export default {
  DATABASE_CONFIG: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'nestjs',
    autoLoadEntities: true,
    synchronize: true,
  },
};

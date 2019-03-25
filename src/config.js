'use strict';

module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DATABASE_URL || 'postgresql://postgres@localhost/cities',
  JWT_SECRET: process.env.JWT_SECRET || 'city-showdown',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '20s',
};

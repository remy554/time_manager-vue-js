export const bcrypt = require('bcryptjs')
export const saltRounds = 10 // This is to prevent rainbow table attacks which can reverse hashed passwords using common hashing functions that do not utilize a salt

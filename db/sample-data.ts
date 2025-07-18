import * as bcrypt from 'bcryptjs';

const sampleData = {
  users: [
    {
      name: 'AB',
      email: 'admin@example.com',
      password: bcrypt.hashSync('12345678', 10),
      role: 'admin',
    },
    {
      name: 'AB',
      email: 'user@example.com',
      password: bcrypt.hashSync('12345678', 10),
      role: 'user',
    },
  ],
};

export default sampleData;

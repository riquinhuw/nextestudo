import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/* JWT secret key */
const KEY = process.env.JWT_KEY;
/* Users collection sample */
const USERS = [
  {
    id: 1,
    email: 'example1@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
  {
    id: 2,
    email: 'example2@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
  {
    id: 3,
    email: 'example3@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
  {
    id: 4,
    email: 'example4@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
];

async function buscarUserEmail(emailInput) {
  const retorno = await prisma.usuarios.findUnique({where:{email:emailInput}});
  await prisma.$disconnect();
  console.dir(retorno, { depth: null })
  return retorno;
}



export default (req, res) => {
  const { method } = req;
  try {
    switch (method) {
      case 'POST':
        /* Get Post Data */
        const { email, password } = req.body;
        /* Any how email or password is blank */
        if (!email || !password) {
          return res.status(400).json({
            status: 'error',
            error: 'Request missing username or password',
          });
        }
        /* Check user email in database */
        buscarUserEmail(email).then(user=>{
          /* Check if exists */
        if (!user) {
          /* Send error with message */
          res.status(400).json({ status: 'error', error: 'User Not Found' });
        }
        /* Define variables */
        const userId = user.id,
          userEmail = user.email,
          userPassword = user.senha,
          userCreated = user.dhcriacao;
        /* Check and compare password */
        bcrypt.compare(password, userPassword).then(isMatch => {
          /* User matched */
          if (isMatch) {
            /* Create JWT Payload */
            const payload = {
              id: userId,
              email: userEmail,
              createdAt: userCreated,
            };
            /* Sign token */
            jwt.sign(
              payload,
              KEY,
              {
                expiresIn: 31556926, // 1 year in seconds
              },
              (err, token) => {
                /* Send succes with token */
                res.status(200).json({
                  success: true,
                  token: 'Bearer ' + token,
                });
              },
            );
          } else {
            /* Send error with message */
            res
              .status(400)
              .json({ status: 'error', error: 'Password incorrect' });
          }
        });
          });
        
        break;
      case 'PUT':
        break;
      case 'PATCH':
        break;
      default:
    }
  } catch (error) {
    throw error;
  }
};
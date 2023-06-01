import { PrismaClient } from "@prisma/client";
import { genSalt, hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

const generatePassword = async (password) => {
  const salt = await genSalt();
  return await hash(password, salt);
};

const maxTimeToken = 3 * 24 * 60 * 60;

const createToken = (email, userId) => {
  return jwt.sign({ email, userId }, process.env.JWT_KEY, {
    expiresIn: maxTimeToken,
  });
};

export const singUp = async (req, res, next) => {
  try {
    const prisma = new PrismaClient();

    const { email, password } = req.body;
    // console.log(email, password);
    if (email && password) {
      const user = await prisma.user.create({
        data: {
          email,
          password: await generatePassword(password),
        },
      });

      return res.status(201).json({
        user: { id: user?.id, email: user?.email },
        jwt: createToken(email, user.id),
      });
    }
    return res.status(400).send("Email/Password is Required");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something Wrong");
  }
};

export const login = async (req, res, next) => {
  try {
    const prisma = new PrismaClient();
    const { email, password } = req.body;
    if (email && password) {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(404).send("User not found");
      }

      const comparePass = await compare(password, user.password);
      if (!comparePass) {
        return res.status(400).send("Invalid Email/Password");
      }

      return res.status(200).json({
        user: { id: user?.id, email: user?.email },
        jwt: createToken(email, user.id),
      });
    } else {
      return res.status(400).send("Email/Password is Required");
    }
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};

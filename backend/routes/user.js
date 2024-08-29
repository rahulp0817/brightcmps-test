import express from 'express'
import zod from 'zod'
import jwt from 'jsonwebtoken'
import { User } from '../mongo.js'
import { JWT_SECRET } from '../config.js'
import bcrypt from 'bcrypt'
const router = express.Router()
const saltRounds = 10

// input validation registration
const registerSchema = zod.object({
  fullname: zod.string({
    message: 'Fullname is Invalid',
  }),
  email: zod.string({
    message: 'Email is Invalid',
  }).email(),
  password: zod.string({
    message: 'Password is Invalid it should be 6 characters'
  }).min(6)
})

// user registration endpoint
// http://localhost:3000/api/user/register  (post)  --> use in postman
router.post('/register', async (req, res) => {
  try {
    const body = req.body
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid data",
        error: parsed.error.errors,
      })
    }

    const { email, password } = body;

    const existinguser = await User.findOne({
      email
    });

    if (existinguser) {
      return res.status(411).json({
        message: "User Email already exist"
      });
    }

    const hashpassword = await bcrypt.hash(password, saltRounds)

    const dbuser = await User.create({ ...body, password: hashpassword });
    await dbuser.save();

    const userId = dbuser._id;

    const token = jwt.sign({
      userId
    }, JWT_SECRET);

    res.status(201).json({
      message: "User registered successfully",
      data: dbuser,
      token
    })

  } catch (error) {
    res.status(500).json({
      message: "Error in registration",
      details: error.message
    });
  }

});



// user login validation
const LoginSchema = zod.object({
  email: zod.string({
    message: 'Email is Invalid',
  }).email(),
  password: zod.string({
    message: 'Password is Invalid it should be 6 characters',
  }).min(6)
})

// user login endpoint
// http://localhost:3000/api/user/login  (post)  --> use in postman
router.post('/login', async (req, res) => {
  const { success } = LoginSchema.safeParse(req.body);

  if (!success) {
    return res.status(400).json({
      message: "Invalid data",
      error: success.error.errors,
    })
  }

  const { email, password } = req.body;

  try {
    const logindb = await User.findOne({
      email
    });

    if (!logindb) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, logindb.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    if (logindb) {
      const token = jwt.sign({
        loginId: logindb._id
      }, JWT_SECRET)

      res.status(200).json({
        message: "User login successfully",
        token,
        data: logindb
      })
    }
  } catch (error) {
    res.status(500).json({
      message: "Invalid login details!"
    })
  }


})


// update user details schema 
const updateSchema = zod.object({
  password: zod.string({
    message: 'Password is Invalid it should be atleast 6 characters'
  }).min(6)
})

// update user details endpoint

// http://localhost:3000/api/user/register  (put)  --> use in postman
router.put('/update', async (req, res) => {
  const { success } = updateSchema.safeParse(req.body);

  if (!success) {
    return res.status(400).json({
      message: "Invalid to update",
      error: success.error.errors,
    })
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      })
    }

    if (password) {
      const hashpassword = await bcrypt.hash(password, saltRounds)
      user.password = hashpassword;
    }

    await user.save();

    res.status(200).json({
      message: "user password changed successfully!",
      data: user
    })

  } catch (error) {
    res.status(500).json({
      message: "Error in updating user details",
      details: error.message
    })
  }

})

export default router;
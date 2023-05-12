import User from "../model/user.js"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const userExist = await User.findOne({
            where: {
              [Op.or]: [
                { username: req.body.username },
                { email: req.body.email }
              ]
            }
          })
      
          if(userExist) {
            return res.status(400).json({
              message: 'User already exists'
            })
          }

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            role: req.body.role
        })
        await newUser.save()

        res.status(200).json({
            success: true,
            message: 'register success',
            data: newUser,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const login = async (req, res) => {
    const { email, password} = req.body

    try {
        const user = await User.findOne({ where: { email: email } })
        if(!user) {
            return res.status(404).json({
                success: false,
                message: 'user not found'
            })
        }

        const checkCorrectPassword = await bcrypt.compare(password, user.password)
        if (!checkCorrectPassword) {
            return res.status(401).json({
                success: false,
                message: "incorrect email or password"
            })
        }

        const { password: omitPassword, role, ...rest } = user

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "15d" }
        )

        res.cookie('accesToken', token, {
            httpOnly: true,
            expires: token.expiresIn,
        }).status(200).json({
            token,
            data: { ...rest },
            role,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const updateUser = async (req, res) =>  {
    const id = req.params.id
    const { username, email } = req.body

    try {
        const user = await User.findOne({ username, email }, { where: { id } })

        if (!user) {
            return res.status(404).json({
                status: false,
                message: 'User not found'
            })
        }

        await User.update({ username, email }, { where: { id } })

        const updateUser = await User.findByPk(id)

        return res.status(200).json({
            status: true,
            message: 'User updated successfully',
            data: updateUser
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Internal server error'
        })
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id 

    try {
        await User.destroy({ where: { id: id } })
        res.status(200).json({
            success: true,
            message: 'Succesfully deleted'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
export const getSingleUser = async (req, res) => {
    const id = req.params.id

    try {
        const getUser = await User.findByPk(id)
        res.status(200).json({
            success: true,
            message: 'Succesfull',
            data: getUser
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}
export const getAllUser = async (req, res) => {
    try {
        const Users = await User.findAll()

        res.status(200).json({
            success: true,
            count: Users.length,
            message: 'Successfull',
            data: Users
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}



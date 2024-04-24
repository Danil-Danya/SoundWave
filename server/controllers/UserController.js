import { where } from 'sequelize';
import User from '../database/sql/models/user.js';
import bycrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const generateJSONWebToken = (user) => {
    const { email, avatar, username } = user;
    return jwt.sign({ email, avatar, username }, process.env.JWT_SECRET_KEY, { expiresIn: '168h'});
}

class Users {
    async createUser (req, res) {
        try {
            const { email, password, username } = req.body;
            if (!email || !password || !username) return res.status(401).json({messge: 'you send empty data'});
    
            const candidate = await User.findOne({ where: { email }});
            if (candidate) return res.status(505).json({ messge: 'this user has been added' });
    
            const hashPassword = bycrypt.hashSync(password, 10);
    
            const newUser = await User.create({ email, password: hashPassword, username });
            return res.status(200).json({ newUser });
        }
        catch (error) {
            console.log(error);
            return res.status(501).json({ messge: 'Server has been down' });
        }
    }

    async initializationUser (req, res) {
        try {
            const { email, password } = req.body;
            if (!email || !password) res.status(401).json({messge: 'you send empty data'});

            const user = await User.findOne({ where: { email }});
            if (!user) return res.status(401).json({ messge: 'User not found' });

            const decodeHashPassword = bycrypt.compareSync(password, user.password);
            if (!decodeHashPassword) return res.status(401).json({ messge: 'You send wrong password' });

            const webToken = generateJSONWebToken(user);
            return res.status(200).json({webToken});
        }
        catch (error) {
            console.log(error);
            return res.status(501).json({ messge: 'Server has been down' });
        }
    }

    async authorizationUser (req, res) {
        try {
            const clientWebToken = req.body.clientWebToken;
            if (!clientWebToken) return res.status(401).json({ messge: 'You are not initialized' });

            const decoded = await new Promise((resolve, reject) => {
                jwt.verify(clientWebToken, process.env.JWT_SECRET_KEY, (error, decoded) =>  {
                    error ? reject(error) : resolve(decoded)
                })
            })

            const user = decoded;
            res.status(200).json({ auth: true, user });
        }
        catch (error) {
            console.log(error);
            return res.status(501).json({ messge: 'Server has been down' });
        }
    }

    async editUserProfile (req, res) {
        try {
            const { username, avatar, email } = req.body;
            if ((!username && !avatar) || !email) res.status(401).json({ messge: 'You send empty data' });

            const user = await User.findOne({ where: { email } });
            if (!user) res.status(401).json({ messge: 'We not found this user' });

            if (username) user.username = username;

            if (avatar) {
                const avatar = uploadAvatar();
                user.avatar = avatar;
            }

            const newUser = await User.update(user);
            return res.status(200).json(newUser);
        }
        catch (error) {
            console.log(error);
            return res.status(501).json({ messge: 'Server has been down' });
        }
    }

    async deleteUser (req, res) {
        try {
            const email = req.body.email;
            if (!email) return res.status(401).json({ messge: 'You send a empty data' });

            const dropedUser = await User.destroy({ where: { email } });
            
            if (dropedUser) {
                return res.status(200).json({ messge: 'User has been destroyed' });
            }
            else {
                return res.status(505).json({ messge: 'Undefined server error' });
            }
        }
        catch (error) {
            console.log(error);
            return res.status(501).json({ messge: 'Server has been down' });
        }
    }
}

export default new Users();
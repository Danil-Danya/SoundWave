import { where } from 'sequelize';
import User from '../database/sql/models/user.js';
import bycrypt from 'bcrypt';

class Users {
    async createUser (req, res) {
        try {
            const { email, password, username } = req.body;
            if (!email || !password || !username) return res.status(404).json({messge: 'you send empty data'});
    
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
}

export default new Users();
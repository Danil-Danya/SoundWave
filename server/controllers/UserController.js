import { where } from 'sequelize';
//import User from '../database/sql/models/user.js';

class Users {
    async createUser (req, res) {
        const { email, password, username } = req.body;
        if (!email, !password, !username) return res.status(404).json({messge: 'you send empty data'});

        const candidate = await User.findOne({ where: { email }});
        if (candidate) return res.status(505).json({ messge: 'this user has beem aded' });

        const newUser = await User.create({ email, password, username });
        return res.status(200).json({ newUser });
    }
}

export default new Users();
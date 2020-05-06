import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../config/auth';

export default async(req, res, next) => {
    const { authorization } = req.headers;
    console.log(authorization);
    if (!authorization) {
        return res.status(401).json({ error: 'Token not provid' });
    }
    const [token] = authorization.split(' ');
    console.log(token);

    try {
        const decode = await promisify(jwt.verify)(token, authConfig.secret);

        console.log(decode);
        req.userId = decode.Id;
        return next();
    } catch (error) {
        return res.status(401).json({ error: "Token invalid" });
    }
}
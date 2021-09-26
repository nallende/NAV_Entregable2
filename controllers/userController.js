const user = require('../models/userModel');

exports.getAllUsers = async(req, res) => {
    try {
        const users = await user.find();

        res.status(200).json({
            status: 'succes',
            results: users.length,
            data: { user: users },
        });
    } catch (err) {
        res.status(404).json({ status: fail, message: err });
    }
};

exports.getUser = async(req, res) => {
    try {
        const user = await user.findById(req.params.id);

        res.status(200).json({
            status: 'succes',
            data: { user },
        });
    } catch (err) {
        res.status(404).json({ status: fail, message: err });
    }
};

exports.createUser = async(req, res) => {
    try {
        const newuser = await user.create(req.body);
        res.status(201).json({
            staus: 'success',
            data: {
                user: newuser,
            },
        });
    } catch (err) {
        res.status(400).json({
            stauts: 'fail',
            message: 'Usuario Invalido',
            err: console.log(err.message),
        });
    }
};

exports.updateUser = async(req, res) => {
    try {
        const user = await user.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: 'success',
            data: {
                user: user,
            },
        });
    } catch (err) {
        res.status(404).json({ status: 'fail', message: err });
    }
};

exports.deleteUser = async(req, res) => {
    try {
        const user = await user.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'success',
            alert: 'Usuario ha sido Eliminado',
        });
    } catch (err) {
        res.status(404).json({ status: 'fail', message: err });
    }
};
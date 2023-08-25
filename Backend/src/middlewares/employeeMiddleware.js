const validateBody = (req, res, next) =>{
    const  { body } = req

    if(body.employee_name === undefined || '') {
        return res.status(400).json({message: 'o campo nome é obrigatório!'})
    }

    next()
}

module.exports = {
    validateBody
}
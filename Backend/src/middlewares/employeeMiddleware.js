const validateBody = (req, res, next) =>{
    const  { body } = request

    if(body.title === undefined || '') {
        return res.status(400).json({message: 'o campo nome é obrigatório!'})
    }
}

module.exports = {
    validateBody
}
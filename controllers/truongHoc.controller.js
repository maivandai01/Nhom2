const truongHocModel = require('../model/truongHoc.model')

// [GET] / home
const show = (req, res, next) => {
    truongHocModel.find({})
        .then(results => res.render('home', {data: results}))
        .catch(next)
}

// [GET] / home/create
const create = (req, res) => {
    res.render('create')
}

// [GET] / home/search
const searchSchools = (req, res) => {
    truongHocModel.find({}, (err, results) => {
        var titleSeach = req.query.title 

        if(!err) {
            const result = results.filter((item) => {
                return item.tenTruong.toLowerCase().indexOf(titleSeach.toLowerCase()) !== -1
            })

            if(result) {
                res.render('home', {data: result})
            }
            return result
            
        } else {
            console.log(err)
        }
    })
}

// [POST] / home/store
const store = (req, res, next) => {
    const result = {
        ...req.body,
        image: req.file.filename,
    }

    truongHocModel.create(result)
        .then(() => res.redirect('/'))
        .catch(next)

    return result
}

// [GET] / home/:id/details
const detailsSchool = (req, res, next) => {
    truongHocModel.findOne({slug: req.params.slug})
        .then(result =>  res.render('details', {data: result}))
        .catch(next)
}

// [GET] / home/:id/edit
const edit = (req, res, next) => {
    truongHocModel.findById(req.params.id)
        .then(result =>  res.render('update', {data: result}))
        .catch(next)
}

// [PUT] / home/:id
const updateSchools = (req, res, next) => {
    const result = {
        ...req.body,
        image: req.file.filename,
    }

    truongHocModel.updateOne({_id: req.params.id }, result) 
        .then(() => res.redirect('/'))
        .catch(next)

    return result
}

// [DELETE] / home/:id
const deleteSchools = (req, res, next) => {
    truongHocModel.deleteOne({_id: req.params.id }) 
        .then(() => res.redirect('/'))
        .catch(next)
}



module.exports = {
    show,
    create,
    detailsSchool,
    store,
    edit,
    updateSchools,
    deleteSchools,
    searchSchools
}
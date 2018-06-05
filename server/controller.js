module.exports = {
    readHouses: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_houses().then(houses => {res.status(200).send(houses)}).catch(err => console.log(err).res.status(500).send(err))
    },

    createHouse:(req,res,next) => {
        const dbInstance = req.app.get('db')

        const{name, street, city, state, zip, url, mortgage, rent} = req.body
        console.log(name, street, city, state, zip, url, mortgage, rent)
        dbInstance.create_house([name, street, city, state, zip, url, mortgage, rent])
        .then(()=>res.status(200)
        .send()).catch(()=> res.status(500).send())
    },

    deleteHouse:(req,res,next) => {
        const dbInstance = req.app.get('db')

        dbInstance.delete_house([req.params.id])
        .then(()=>res.status(200).send("It Worked"))
        .catch(()=> res.status(500).send())
    }
}
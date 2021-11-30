const houses = require(`./db.json`)
let globalid = 4 
module.exports = {
    gethouses: (rep, res) =>{
        res.status(200).send(houses)

    }, 
    deletehouse: (req, res) =>{
        let {id} = req.params

        let index = houses.findIndex(elem => +elem.id === +id);
        houses.splice(index, 1);
        res.status(200).send(houses)
        
    },
    createhouse: (req, res) =>{
        const {id, address, price, imageUrl} = req.body
            let newhouse ={
        
                address,
                price,
                imageUrl,
                id: globalid
            }
      houses.push(newhouse) 
      res.status(200).send(houses)  
      globalid++   
    },
    updatehouse: (req, res)=>{
        const {id} = req.params
        const {type} = req.body
         index = houses.findIndex(elem => +elem.id === +id);
         if (houses[index].price == 0 && type === 'minus'){
             res.status(400).send('cannot go under zero')
         }else if (type === 'plus'){
             houses[index].price += 10000
             res.staus(200).send( houses)
         }else if(type === 'minus'){
             houses[index].price -= 10000
             res.status(200).send(houses)
         }
    }



}
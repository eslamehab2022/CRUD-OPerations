import proudactModel from "../../../DB/model/Proudact.model.js";
import userModel from "../../../DB/model/User.model.js";

export const allProudacts = async (req, res) => {
    
    const proudacts = await proudactModel.findAll({
        attributes:{exclude:['userId']},
        include: {
            model: userModel,
            attributes:['userName' ,'email' ,'id']
        }
    });
    return res.json({ message: 'proudact found', proudacts })

};


export const addProudact = async (req, res) => {
    const { titel, descration, moudel, userId } = req.body;

    const shoping = await proudactModel.create({ titel, descration, moudel,userId }, {})
    
    return res.json({ message: 'proudact added shoppig', shoping })
};


export const proudactUpdate =  async(req, res) => {
    const { id } = req.params;
    const { descration, titel, moudel,userId } = req.body;
    const shopinhUpdate = await  proudactModel.update({ titel, descration, moudel, userId }, {
        
        
        where: {
            id
            
        },
    })

    return shopinhUpdate[0] ? res.json({ message: 'updated successfully', shopinhUpdate }) : res.json({ message: 'proudact not found in shoping' })

};

  export const proudactDelete = (req, res) => {
    const { id } = req.params;

    const shopingDelete = proudactModel.destroy({ where: { id } })
    
    return shopingDelete? res.json({messag:'delete shoping Done'}):res.json({messag:'proudact not found in shoping'})

}

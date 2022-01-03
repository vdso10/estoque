import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'

import credentials from '../../credentials.json'


const doc = new GoogleSpreadsheet('1i-2bdX9zePG4A5EAieNTzRG3k_lqbPDZm49yuXcERSw')


const genCodigo = () => {
    const code = parseInt(moment().format('YYss'))
    return code
}



export default async(req, res) =>{

    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)


        await sheet.addRow({
            Codigo: genCodigo(),
            Descricao: data.Descricao,
            Categoria: data.Categoria,
            Data_Cadastro: moment().format('DD/MM/YYYY HH:mm:ss'),
        })

        res.end(req.body)
        
    } catch (error) {
        console.log(error)
        res.end(error)
    }    
}

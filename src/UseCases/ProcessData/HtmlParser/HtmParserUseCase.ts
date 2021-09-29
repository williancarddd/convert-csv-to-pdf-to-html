import ejs from 'ejs'
import path from 'path'
import { IEstructureTable } from './IEstructureTable'


export class HtmlParser{
   public static async CreateHtml( { headerTable, bodyTable }:IEstructureTable ): Promise<string>{
    return await ejs.renderFile(path.resolve('src', 'index.ejs'), {
      headerTable,
      bodyTable
    })
  }
}
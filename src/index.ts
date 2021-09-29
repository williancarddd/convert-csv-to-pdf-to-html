import { ReaderFileIns } from './UseCases/Read/ReadFile'
import { ProcessorData } from './UseCases/ProcessData/ProcessorData'
import {Table} from './UseCases/Tables/Table/TableUseCase'
import { HtmlParser } from './UseCases/ProcessData/HtmlParser'

(async () =>{

  const content = await ReaderFileIns.Read('./src/assets/users.csv')
  const dataProcess = ProcessorData.Process(content)

  if (dataProcess != undefined){
    const tableCsv = new Table(dataProcess)
    console.log(await HtmlParser.CreateHtml(tableCsv.ObjectTable))
  }

})()
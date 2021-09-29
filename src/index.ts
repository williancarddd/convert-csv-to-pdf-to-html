import { ReaderFileIns } from './UseCases/Read/ReadFile'
import { ProcessorData } from './UseCases/ProcessData/ProcessorData'
import {Table} from './UseCases/Tables/Table/TableUseCase'
import { HtmlParser } from './UseCases/ProcessData/HtmlParser'
import { WriteFileIns } from './UseCases/Write/WriteFile'
import { WritePdf } from './UseCases/Write/WritePdf'

(async () =>{

  const content = await ReaderFileIns.Read('./src/assets/users.csv')
  const dataProcess = ProcessorData.Process(content)

  if (dataProcess != undefined){
    const tableCsv = new Table(dataProcess)
    const htmlDocument = await HtmlParser.CreateHtml(tableCsv.ObjectTable)
    //const resultCreateFile = await WriteFileIns.Write(htmlDocument)
    //console.log(resultCreateFile)
    WritePdf.WritePdf('test', htmlDocument)
  }

})()
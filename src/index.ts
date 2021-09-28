import { ReaderFileIns } from './UseCases/Read/ReadFile'
import { ProcessorData } from './UseCases/ProcessData/ProcessorData'

(async () =>{
  const content = await ReaderFileIns.Read('./src/assets/users.csv')
  console.log(ProcessorData.Process(content))
})()
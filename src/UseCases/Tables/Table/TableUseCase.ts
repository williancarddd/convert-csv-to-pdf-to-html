
export class Table{
 protected dataProcessing: Array<Array<any>>
 public  header: Array<any>
 public  body: Array<Array<any>>

 public  constructor(dataProcessing: Array<Array<any>>){
    this.dataProcessing = dataProcessing
    this.header = this.dataProcessing[0]
    this.body = this.dataProcessing.slice(1, this.dataProcessing.length)
  }

  public get RowCount(){
    return this.body.length
  }

  public get ColumnCount(){
    return this.header.length
  }

  public get ObjectTable(){
    return {
      headerTable: this.header,
      bodyTable: this.body
    }
  }
}